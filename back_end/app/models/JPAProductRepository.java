package models;

import play.db.jpa.JPAApi;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import play.libs.Json;
import static play.libs.Json.toJson;
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
public class JPAProductRepository implements ProductRepository {

    private final JPAApi jpaApi;
    private final DatabaseExecutionContext executionContext;

    @Inject
    public JPAProductRepository(JPAApi jpaApi, DatabaseExecutionContext executionContext) {
        this.jpaApi = jpaApi;
        this.executionContext = executionContext;
    }
    @Override
    public CompletionStage<String> addproduct(Product product) {
        return supplyAsync(() -> wrap(em -> insert(em, product)), executionContext);
    }

    @Override
    public CompletionStage<Integer> update(Long id,Integer np) {
        return supplyAsync(() -> wrap(em -> update(em,id,np)), executionContext);
    }

    @Override
    public CompletionStage<Integer> delete(Long id) {
        return supplyAsync(() -> wrap(em -> del(em,id)), executionContext);
    }
    @Override
    public CompletionStage<Integer> deletesearch(String search) {
        return supplyAsync(() -> wrap(em -> dels(em,search)), executionContext);
    }
    @Override
    public CompletionStage<Integer> deletecart(Long pid,Long cid) {
        return supplyAsync(() -> wrap(em -> deletecart(em,pid,cid)), executionContext);
    }

    @Override
    public CompletionStage<Stream<Product>> list() {
        return supplyAsync(() -> wrap(em -> list(em)), executionContext);
    }

    @Override
    public CompletionStage<Stream<Product>> getcProducts(String scat) {
        return supplyAsync(() -> wrap(em -> getcProducts(em,scat)), executionContext);
    }

    @Override
    public CompletionStage<Stream<Product>> getSearchProducts(String search) {
        return supplyAsync(() -> wrap(em -> getSearchProducts(em,search)), executionContext);
    }

    @Override
    public CompletionStage<String> addSearchProduct(Long cid,String search) {
        return supplyAsync(() -> wrap(em -> addSearchProduct(em,cid,search)), executionContext);
    }

    @Override
    public CompletionStage<Stream<Product>> getdl(Long did) {
        return supplyAsync(() -> wrap(em -> dlist(em,did)), executionContext);
    }
    @Override
    public CompletionStage<Stream<Product>> getdlsum(Long did) {
        return supplyAsync(() -> wrap(em -> dlistsum(em,did)), executionContext);
    }

    @Override
    public CompletionStage<String> customerSearch(Long cid) {
        return supplyAsync(() -> wrap(em -> customerSearch(em,cid)), executionContext);
    }

    @Override
    public CompletionStage<Product> singleproduct(Long id) {
        return supplyAsync(() -> wrap(em -> singleproduct(em, id)), executionContext);
    }
    @Override
    public CompletionStage<String> buyproduct(Long pid,Long cid,Integer aprice,Integer quant,Integer nquant) {
        return supplyAsync(() -> wrap(em -> buyproduct(em,pid,cid,aprice,quant,nquant)), executionContext);
    }

    @Override
    public CompletionStage<String> cartproduct(Long pid,Long cid,Integer aprice,Integer quant,Integer nquant) {
        return supplyAsync(() -> wrap(em -> cartproduct(em,pid,cid,aprice,quant,nquant)), executionContext);
    }

    @Override
    public CompletionStage<Stream<Product>> clist(Long cid) {
        return supplyAsync(() -> wrap(em -> clist(em,cid)), executionContext);
    }
    @Override
    public CompletionStage<Stream<Product>> cartlist(Long cid) {
        return supplyAsync(() -> wrap(em -> cartlist(em,cid)), executionContext);
    }
    @Override
    public CompletionStage<Stream<Long>> cartnumber(Long cid) {
        return supplyAsync(() -> wrap(em -> cartnumber(em,cid)), executionContext);
    }
    @Override
    public CompletionStage<Stream<Product>> slist() {
        return supplyAsync(() -> wrap(em -> slist(em)), executionContext);
    }
    private <T> T wrap(Function<EntityManager, T> function) {
        return jpaApi.withTransaction(function);
    }



    private String insert(EntityManager em, Product js) {
        String c=js.cat,des=js.des,i1=js.img1,ngo=js.ngo,pname=js.pname,qlty=js.quality,scat=js.scat;
        long did=js.did;
        int cost=js.cost,quant=js.quant,state=js.state,year=js.year;
        int s=-1,qt=quant;
                List<Integer> x=em.createQuery("select state from Product where cat=:c and des=:des and img1=:i1 and ngo=:ngo and pname=:pname and quality=:qlty and scat=:scat and " +
                "did=:did and cost=:cost and year=:year",Integer.class).setParameter("c",c).setParameter("des",des).setParameter("i1",i1)
                .setParameter("ngo",ngo).setParameter("pname",pname).setParameter("qlty",qlty).setParameter("scat",scat).setParameter("did",did)
                .setParameter("cost",cost).setParameter("year",year).getResultList();
          if (x.size()>0)
              s=x.get(0);
        List<Integer> q=em.createQuery("select quant from Product where cat=:c and des=:des and img1=:i1 and ngo=:ngo and pname=:pname and quality=:qlty and scat=:scat and " +
                "did=:did and cost=:cost and year=:year",Integer.class).setParameter("c",c).setParameter("des",des).setParameter("i1",i1)
                .setParameter("ngo",ngo).setParameter("pname",pname).setParameter("qlty",qlty).setParameter("scat",scat).setParameter("did",did)
                .setParameter("cost",cost).setParameter("year",year).getResultList();
        if (q.size()>0)
            qt=quant+q.get(0);
              //s=x.get(0);
        int i=-1;
        //i=em.createQuery("SET SQL_SAFE_UPDATES =: r").setParameter("r",0).executeUpdate();
        if(s==2) {
           // int quantity=x.get(1)+quant;
            i = em.createQuery("update Product SET quant=:qt,state=:s where pname=:pname and ngo=:n").setParameter("qt",qt).setParameter("s",1).setParameter("pname",pname).setParameter("n",ngo).executeUpdate();
        }
        else if(s==0 || s==1)
        {
            i = em.createQuery("update Product SET quant=:q where pname=:pname and ngo=:n").setParameter("q",qt).setParameter("pname",pname).setParameter("n",ngo).executeUpdate();
        }
        else if(s==3)
        {
            i = em.createQuery("update Product SET quant=:q,state=:s where pname=:pname and ngo=:n").setParameter("s",0).setParameter("q",quant).setParameter("pname",pname).setParameter("n",ngo).executeUpdate();
        }
        else if(s==-1)
        {
            em.persist(js);
        }

        return "ok"+js.pid;

    }


    private Stream<Product> list(EntityManager em) {
        List<Product> persons = em.createQuery("select pid,pname,quant,cat,img1,expdate,cost,year,did,state from Product where state=:s ORDER BY expdate DESC").setParameter("s",0).getResultList();
        return persons.stream();
    }

    private Stream<Product>  dlist(EntityManager em,Long did) {
        // List<Product> persons = em.createQuery("select p.pname,p.img1,p.ngo,p.nprice,p.state from Product p where p.did=:did").setParameter("did",did).getResultList();
        List<Product> persons = em.createQuery("select p.pname,p.img1,p.ngo,p.nprice,p.state,n.aprice,n.nquant,p.quant,p.pid,sum(n.nquant),sum(n.nquant*n.aprice) " +
                "from Product p LEFT JOIN PC n ON p.pid=n.pid where p.did=:did and p.state<=:s group by p.pid").setParameter("s",2).setParameter("did",did).getResultList();

        return persons.stream();
    }
    private Stream<Product>  dlistsum(EntityManager em,Long did) {

        List<Product> persons1 = em.createQuery("select sum(n.nquant*n.aprice) as sum,p.pid " +
                "from Product p LEFT JOIN PC n ON p.pid=n.pid where p.did=:did and p.state!=:s group by p.pid ").setParameter("s",3).setParameter("did",did).getResultList();

        return persons1.stream();
    }

    private Integer update(EntityManager em,Long id,Integer np) {
        int s=1;
        int i = em.createQuery("update Product SET state=:s,nprice=:nprice where pid=:id").setParameter("s",s).setParameter("nprice",np).setParameter("id",id).executeUpdate();

        return i;
    }

    private Stream<Product>  getcProducts(EntityManager em,String scat) {
        List<Product> persons = em.createQuery("select pid,pname,nprice,quant,img1,des,cost,year " +
                "from Product p where scat=:scat and state=:s").setParameter("scat",scat).setParameter("s",1).getResultList();
        return persons.stream();
    }

    private Stream<Product>  getSearchProducts(EntityManager em,String search) {
        String sc="%"+search+"%";
        List<Product> persons = em.createQuery("select pid,pname,nprice,quant,img1,des,cost,year from Product p where (p.pname LIKE  :search or p.cat LIKE  :search or p.scat LIKE  :search or p.des LIKE  :search) and state=:s").setParameter("search",sc).setParameter("s",1).getResultList();
        return persons.stream();
    }

    private int del(EntityManager em,Long id) {

        int i = em.createQuery("update Product set state=:s where pid=:id ").setParameter("s",3).setParameter("id", id).executeUpdate();
        //em.remove(foundPerson);

        return i;
    }
    private int dels(EntityManager em,String search) {

        int i = em.createQuery("update Search set status=:s where search=:pname").setParameter("s",1).setParameter("pname",search).executeUpdate();
        //em.remove(foundPerson);

        return i;
    }
    private Product  singleproduct(EntityManager em,Long id) {
        Product persons = em.createQuery("select p from Product p where pid=:id",Product.class).setParameter("id", id).getSingleResult();
        return persons;
    }

    private String buyproduct(EntityManager em,Long pid,Long cid,Integer aprice,Integer quant,Integer nquant) {


        Integer q = quant - nquant;
        int i;
        String s = "got Inserted into pc with pid";
        if (q == 0) {
            i = em.createQuery("update Product SET state=:s,quant=:q where pid=:id").setParameter("id", pid).setParameter("s", 2).setParameter("q", q).executeUpdate();
        } else {
            i = em.createQuery("update Product SET quant=:q where pid=:id").setParameter("id", pid).setParameter("q", q).executeUpdate();
        }
        if (i != 0)
        {

            //try {
              // PC p = em.createQuery("select p from PC p where pid=:pid and cid=:cid and cart=:s", PC.class).setParameter("s",0).setParameter("pid", pid).setParameter("cid", cid).getSingleResult();
               /* int r = em.createQuery("update PC set cart=:c where pid=:pid and cid=:cid and cart=:s and nquant=:q and aprice=:p")
                        .setParameter("q",nquant).setParameter("p",aprice).setParameter("s",1).setParameter("pid", pid)
                        .setParameter("cid", cid).setParameter("c", 1).executeUpdate();
                */int d= em.createQuery("delete from PC  where pid=:pid and cid=:cid and cart=:s and nquant=:q and aprice=:p")
                        .setParameter("s",0).setParameter("pid", pid).setParameter("q",nquant).setParameter("p",aprice)
                        .setParameter("cid", cid).executeUpdate();

                    PC pc = new PC();
                    pc.pid = pid;
                    pc.cid = cid;
                    pc.cart = 1;
                    pc.aprice = aprice;
                    pc.nquant = nquant;
                    em.persist(pc);
                    return s;

           // }
            //catch (Exception e)
            //{
            //}
        }
        else
        {
            return null;
        }


    }

    private String cartproduct(EntityManager em,Long pid,Long cid,Integer aprice,Integer quant,Integer nquant) {


        PC pc=new PC();
        pc.pid=pid;
        pc.cid=cid;
        pc.aprice=aprice;
        pc.cart=0;
        pc.nquant=nquant;
        em.persist(pc);
        String s="got Inserted into pc with pid"+pc.id;
        return s;

    }

    private Stream<Product> clist(EntityManager em,Long cid) {
        List<Product> persons = em.createQuery("select p.pname,p.img1,n.aprice,n.nquant,n.cart,p.ngo,p.nprice " +
                "from Product p,PC n where p.pid=n.pid and n.cid=:cid and n.cart=:c").setParameter("cid",cid).setParameter("c",1).getResultList();
        return persons.stream();
    }

    private Stream<Product> cartlist(EntityManager em,Long cid) {

        List<Product> persons = em.createQuery("select p.pname,p.img1,p.quant,n.pid,n.aprice,n.nquant,p.des from Product p,PC n where p.pid=n.pid " +
                "and n.cid=:cid and n.cart=:c").setParameter("cid",cid).setParameter("c",0).getResultList();
        return persons.stream();
    }
    private Stream<Long> cartnumber(EntityManager em,Long cid) {

        List<Long> persons = em.createQuery("select count(*) from Product p,PC n where p.pid=n.pid and n.cid=:cid and n.cart=:c",Long.class).setParameter("cid",cid).setParameter("c",0).getResultList();
        return persons.stream();
    }

    private int deletecart(EntityManager em,Long pid,Long cid) {

        int i = em.createQuery("Delete  from PC p where pid=:pid and cid=:cid").setParameter("pid", pid).setParameter("cid", cid).executeUpdate();
        //em.remove(foundPerson);

        return i;

    }

    private String addSearchProduct(EntityManager em,Long id,String search) {
        try{
           // Long id=em.createQuery("Select id from Person where email=:email ",Long.class).setParameter("email",email).getSingleResult();
            Search s=new Search();
            s.cid=id;
            s.search=search;
            s.status=0;
              em.persist(s);

            return("added to search"+s.id);

        }
        catch(Exception e){
            return ("exception");
        }

    }
    private Stream<Product> slist(EntityManager em) {
        List<Product> products = em.createQuery("select search,count(*) from Search where status=:s group by search").setParameter("s",0).getResultList();
        return products.stream();
    }

    private String customerSearch(EntityManager em,Long cid) {

        List<String> cs=em.createQuery("Select search from Search where cid=:cid ").setParameter("cid",cid).getResultList();
        String s="Hi Buddy \n";
        for(int i=0;i<cs.size();i++)
        {    String k="%"+cs.get(i)+"%";
            List<Product> p=em.createQuery("select p from Product p where (p.pname LIKE  :search or p.cat LIKE  :search or p.scat LIKE  :search or p.des LIKE  :search) and state=:s").setParameter("search",k).setParameter("s",1).getResultList();
            if(!p.isEmpty()) {
                s = s + "we got some new " + cs.get(i) + "\n";

                int j = em.createQuery("delete from Search p where p.cid=:cid and p.search=:search").setParameter("cid",cid).setParameter("search",cs.get(i)).executeUpdate();
            }

        }
        return(s);

    }

}