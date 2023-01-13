package models;

import play.db.jpa.JPAApi;

import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;
import java.util.List;
import java.util.concurrent.CompletionStage;
import java.util.function.Function;
import java.util.stream.Stream;
import java.lang.Exception;
//import javax.persistence.NoResultException;

import static java.util.concurrent.CompletableFuture.supplyAsync;

/**
 * Provide JPA operations running inside of a thread pool sized to the connection pool
 */
public class JPANgoRepository implements NgoRepository {

    private final JPAApi jpaApi;
    private final DatabaseExecutionContext executionContext;

    @Inject
    public JPANgoRepository(JPAApi jpaApi, DatabaseExecutionContext executionContext) {
        this.jpaApi = jpaApi;
        this.executionContext = executionContext;
    }
    @Override
    public CompletionStage<Ngo> addngo(Ngo ngo) {
        return supplyAsync(() -> wrap(em -> insert(em, ngo)), executionContext);

    }
    @Override
    public CompletionStage<Ngo> updateNgodetails(Long id,String username,String password,String email,Long phone,String address) {
        return supplyAsync(() -> wrap(em -> updateNgodetails(em,id,username,password,email,phone,address)), executionContext);
    }
    @Override
    public CompletionStage<Ngo> login1(Long id) {
        return supplyAsync(() -> wrap(em -> login1(em, id)), executionContext);
    }

    @Override
    public CompletionStage<Integer> updateNgo(Long id,Integer s) {
        return supplyAsync(() -> wrap(em -> updateNgo(em,id,s)), executionContext);
    }
    @Override
    public CompletionStage<Stream<Ngo>> summary(Long id) {
        return supplyAsync(() -> wrap(em -> slist(em,id)), executionContext);
    }
    @Override
    public CompletionStage<Integer> delete(Long id) {
        return supplyAsync(() -> wrap(em -> del(em,id)), executionContext);
    }
    @Override
    public CompletionStage<Stream<Ngo>> list() {
        return supplyAsync(() -> wrap(em -> list(em)), executionContext);
    }

    @Override
    public CompletionStage<Stream<Ngo>> list1() {
        return supplyAsync(() -> wrap(em -> list1(em)), executionContext);
    }

    private <T> T wrap(Function<EntityManager, T> function) {
        return jpaApi.withTransaction(function);
    }

    private Ngo insert(EntityManager em, Ngo ngo) {
        em.persist(ngo);
        return ngo;
    }
    private Stream<Ngo> list(EntityManager em) {
        List<Ngo> persons = em.createQuery("select username from Ngo p").getResultList();
        return persons.stream();
    }
    private Stream<Ngo> list1(EntityManager em) {
        List<Ngo> ngos = em.createQuery("select id,address,email,password,phone,state,username from Ngo  where state=:s").setParameter("s",0).getResultList();

        return ngos.stream();
    }

    public Ngo login(String email,String password){
        EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("defaultPersistenceUnit");
        EntityManager em= entityManagerFactory.createEntityManager();
        em.getTransaction().begin();

        Ngo foundNgo = em.createQuery("select n from Ngo n where email=:email and password=:password and state=:s",Ngo.class).setParameter("email", email).setParameter("password", password).setParameter("s",1).getSingleResult();
        //em.remove(foundPerson);
        return foundNgo;

    }

    private int updateNgo(EntityManager em,Long id,Integer s) {
        int i = em.createQuery("update Ngo SET state=:s where id=:id").setParameter("s",s).setParameter("id",id).executeUpdate();
        return i;
    }

    private int del(EntityManager em,Long id) {

        int i = em.createQuery("Delete  from Ngo p where id=:id ").setParameter("id", id).executeUpdate();
        //em.remove(foundPerson);

        return i;
    }
    public Ngo login1(EntityManager em,Long id){


        Ngo foundPerson = em.createQuery("select n from Ngo n where id=:id",Ngo.class).setParameter("id", id).getSingleResult();

        return foundPerson;

    }
    private Ngo updateNgodetails(EntityManager em,Long id,String username,String password,String email,Long phone,String address) {
        int i = em.createQuery("update Ngo SET username=:username,password=:password,email=:email,phone=:phone,address=:address where id=:id").setParameter("username",username).setParameter("password",password).setParameter("email",email).setParameter("phone",phone).setParameter("address",address).setParameter("id",id).executeUpdate();
        //int i=q.executeUpdate();
        if(i!=0){
            Ngo ngos = em.createQuery("select n from Ngo n where id=:id",Ngo.class).setParameter("id", id).getSingleResult();
            return ngos;}
        else
        {
            return null;
        }
    }
    private Stream<Ngo> slist(EntityManager em,Long id) {
        //List<Ngo> ngos = em.createQuery("select distinct p.pname,pc.nquant,pc.cid,p.did,pc.aprice,p.ngo from Product p,PC pc,Person n where p.pid=pc.pid and p.state=:state and p.ngo=:ngo").setParameter("state",2).setParameter("ngo",ngo).getResultList();
        List<Ngo> ngos = em.createQuery("SELECT distinct p.pname,pc.nquant,pc.cid,pe1.username,p.did,pe2.username,pc.aprice,n.username\n" +
                "FROM Product p\n" +
                "INNER JOIN PC pc ON p.pid = pc.pid\n" +
                "INNER JOIN Ngo n ON n.username=p.ngo\n" +
                "INNER JOIN Person pe1 ON pc.cid=pe1.id \n"+
                "INNER JOIN Person pe2 ON p.did=pe2.id \n"+
                "where n.id=:ngo and p.state<=:state")
                .setParameter("state",2).setParameter("ngo",id).getResultList();
        return ngos.stream();
    }

}
