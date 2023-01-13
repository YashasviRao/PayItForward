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
public class JPACategoryRepository implements CategoryRepository {

    private final JPAApi jpaApi;
    private final DatabaseExecutionContext executionContext;

    @Inject
    public JPACategoryRepository(JPAApi jpaApi, DatabaseExecutionContext executionContext) {
        this.jpaApi = jpaApi;
        this.executionContext = executionContext;
    }
    @Override
    public CompletionStage<Stream<Category>> catlist() {
        return supplyAsync(() -> wrap(em -> catlist(em)), executionContext);
    }

    @Override
    public CompletionStage<Stream<Category>> subcatlist(String cat) {
        return supplyAsync(() -> wrap(em -> subcatlist(em,cat)), executionContext);
    }
    @Override
    public CompletionStage<Stream<Category>> subcat_imagelist(String cat) {
        return supplyAsync(() -> wrap(em -> subcat_imagelist(em,cat)), executionContext);
    }
    @Override
    public CompletionStage<String> addcat(String pname,String cat,String scat,String img) {
        return supplyAsync(() -> wrap(em -> addcat(em,pname,cat,scat,img)), executionContext);
    }
    @Override
    public CompletionStage<Stream<Category>> dreqlist() {
        return supplyAsync(() -> wrap(em -> dreqlist(em)), executionContext);
    }
    @Override
    public CompletionStage<Stream<Category>> catalog() {
        return supplyAsync(() -> wrap(em -> catalog(em)), executionContext);
    }
    @Override
    public CompletionStage<Stream<Category>> redonatelist(Long did) {
        return supplyAsync(() -> wrap(em -> redonatelist(em,did)), executionContext);
    }
    @Override
    public CompletionStage<Stream<Long>> dsf() {
        return supplyAsync(() -> wrap(em -> dsf(em)), executionContext);
    }
    private <T> T wrap(Function<EntityManager, T> function) {
        return jpaApi.withTransaction(function);
    }

    private Stream<Category> catlist(EntityManager em) {
        List<Category> cats = em.createQuery("select distinct cat from Category c ORDER BY cat").getResultList();
        return cats.stream();
    }
    private Stream<Category> subcatlist(EntityManager em,String cat) {
        List<Category> cats = em.createQuery("select distinct scat from Category c where cat=:cat ORDER BY scat")
                .setParameter("cat",cat).getResultList();
        return cats.stream();
    }
    private Stream<Category> subcat_imagelist(EntityManager em,String cat) {
        List<Category> cats = em.createQuery("select distinct scat,img1 from Category c where cat=:cat ORDER BY scat")
                .setParameter("cat",cat).getResultList();
        return cats.stream();
    }
    private String addcat(EntityManager em,String pname,String cat,String scat,String img) {
        int x=0;
        String s="already exists";
        List<Category> i= em.createQuery("select c from Category c where c.pname=:pname").setParameter("pname",pname).getResultList();
        if(i.size()==0) {
            /*x=em.createQuery("insert into Category(pname,img1,cat,scat) values(pro=:pro,img=:img,c=:c,sc=:sc)")
                .setParameter("pro",pname).setParameter("img",img).setParameter("c",cat).setParameter("sc",scat)
                .executeUpdate();*/
            Category c=new Category();
            c.pname=pname;
            c.cat=cat;c.scat=scat;c.img1=img;
            em.persist(c);
            s="added new category";
        }
        x=em.createQuery("update Search set status=:s where search=:pname").setParameter("s",1).setParameter("pname",pname).executeUpdate();
        return s;
    }

    private Stream<Category> dreqlist(EntityManager em) {
        List<Category> cats = em.createQuery("select distinct s.search,c.cat,c.scat from Category c,Search s,Product p where s.search=c.pname order by c.cat ")
                .getResultList();
        return cats.stream();
    }

    private Stream<Category> redonatelist(EntityManager em,Long did) {
      //  List<Category> cats = em.createQuery("select distinct s.search,c.cat,c.scat from Category c,Search s,Product p where s.search=c.pname and p.state=:state order by c.cat").setParameter("state",2).getResultList();
        List<Category> cats = em.createQuery("SELECT distinct s.search,c.cat,c.scat,p.ngo\n" +
                "FROM Search s\n" +
                "INNER JOIN Category c ON s.search = c.pname\n" +
                "INNER JOIN Product p ON p.pname=s.search\n" +
                "where p.did=:did and p.state=:state")
                .setParameter("did",did).setParameter("state",2).getResultList();
        return cats.stream();
    }

    private Stream<Category> catalog(EntityManager em) {
        List<Category> cats = em.createQuery("select cat,subcat from Category group by cat").getResultList();
        return cats.stream();
    }
    private Stream<Long> dsf(EntityManager em) {
        //List<Long> cats=new List<Long>();
        List<Long> donate=em.createQuery("select count(*) from Product",Long.class).getResultList();
        List<Long> sell=em.createQuery("select count(*) from Product where state=:st",Long.class).setParameter("st",2).getResultList();
        List<Long> fund=em.createQuery("select sum(aprice) from PC where cart=:ct",Long.class).setParameter("ct",1).getResultList();
        //cats.add(donate);cats.add(sell);cats.add(fund);
       donate.addAll(sell);
       donate.addAll(fund);
        return donate.stream();
    }
}
