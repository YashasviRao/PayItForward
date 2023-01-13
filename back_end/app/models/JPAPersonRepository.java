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
import java.sql.*;
import java.math.*;
//import javax.persistence.NoResultException;

import static java.util.concurrent.CompletableFuture.supplyAsync;

/**
 * Provide JPA operations running inside of a thread pool sized to the connection pool
 */
public class JPAPersonRepository implements PersonRepository {

    private final JPAApi jpaApi;
    private final DatabaseExecutionContext executionContext;

    @Inject
    public JPAPersonRepository(JPAApi jpaApi, DatabaseExecutionContext executionContext) {
        this.jpaApi = jpaApi;
        this.executionContext = executionContext;
    }

    @Override
    public CompletionStage<Person> add(Person person) {
        return supplyAsync(() -> wrap(em -> insert(em, person)), executionContext);
    }


    @Override
    public CompletionStage<Person> login1(Long id) {
        return supplyAsync(() -> wrap(em -> login1(em,id)), executionContext);
    }
    @Override
    public CompletionStage<String> getEmail(Long id) {
        return supplyAsync(() -> wrap(em -> getEmail(em,id)), executionContext);
    }

    @Override
    public CompletionStage<Person> update(Long id,String username,String password,String email,BigInteger phone,String address) {
        return supplyAsync(() -> wrap(em -> update(em,id,username,password,email,phone,address)), executionContext);
    }

    @Override
    public CompletionStage<Person> delete(String username,String password) {
        return supplyAsync(() -> wrap(em -> del(em, username,password)), executionContext);
    }
    @Override
    public CompletionStage<Stream<Person>> list() {
        return supplyAsync(() -> wrap(em -> list(em)), executionContext);
    }

@Override
public Person login(String email,String password){
    EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("defaultPersistenceUnit");
    EntityManager em= entityManagerFactory.createEntityManager();
    em.getTransaction().begin();

    Person foundPerson = em.createQuery("select p from Person p where email=:email and password=:password",Person.class).setParameter("email", email).setParameter("password", password).getSingleResult();
    //em.remove(foundPerson);
    return foundPerson;

}



    public Person login1(EntityManager em,Long id){


    Person foundPerson = em.createQuery("select p from Person p where id=:id",Person.class).setParameter("id", id).getSingleResult();

        return foundPerson;

    }



    private <T> T wrap(Function<EntityManager, T> function) {
        return jpaApi.withTransaction(function);
    }

    private Person insert(EntityManager em, Person person) {
        em.persist(person);
        return person;
    }

    private Person update(EntityManager em,Long id,String username,String password,String email,BigInteger phone,String address) {
         int i = em.createQuery("update Person SET username=:username,password=:password,email=:email,phone=:phone,address=:address where id=:id").setParameter("username",username).setParameter("password",password).setParameter("email",email).setParameter("phone",phone).setParameter("address",address).setParameter("id",id).executeUpdate();
       //int i=q.executeUpdate();
        if(i!=0){
            Person persons = em.createQuery("select p from Person p where id=:id",Person.class).setParameter("id", id).getSingleResult();
            return persons;}
        else
        {
            return null;
        }
    }

    public String getEmail(EntityManager em,Long id){


        String foundPerson = em.createQuery("select p.email from Person p where id=:id",String.class).setParameter("id", id).getSingleResult();

        return foundPerson;

    }
    private Stream<Person> list(EntityManager em) {
        List<Person> persons = em.createQuery("select p from Person p", Person.class).getResultList();
        return persons.stream();
    }
    private Person del(EntityManager em,String username,String password) {
        try{
        Person foundPerson = em.createQuery("select p from Person p where(select count(p) from Person p where username=:username and password=:password)=1 ",Person.class).setParameter("username", username).setParameter("password", password).getSingleResult();
        //em.remove(foundPerson);
        return foundPerson;}
        catch(Exception e){
            return null;
        }

    }
}
