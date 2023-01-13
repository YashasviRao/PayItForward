package controllers;

import com.fasterxml.jackson.databind.JsonNode;
import models.Product;
import models.ProductRepository;
import models.PC;
import models.Search;
import models.Category;
import play.data.FormFactory;
import play.libs.Json;
import play.libs.concurrent.HttpExecutionContext;
import play.mvc.Controller;
import play.mvc.Result;
import java.util.Map;

import play.mvc.Http.Response;
import com.fasterxml.jackson.databind.ObjectMapper;

import javax.inject.Inject;
import java.util.concurrent.CompletionStage;
import java.util.stream.Collectors;

import static play.libs.Json.toJson;

public class ProductController extends Controller {

    private final FormFactory formFactory;
    private final ProductRepository productRepository;
    private final HttpExecutionContext ec;

    @Inject
    public ProductController(FormFactory formFactory, ProductRepository productRepository, HttpExecutionContext ec) {
        this.formFactory = formFactory;
        this.productRepository = productRepository;

        this.ec = ec;
    }

    public Result index() {
        return ok(views.html.index.render());
    }

    public CompletionStage<Result> addproduct() {
        JsonNode js=request().body().asJson();
        Product p= Json.fromJson(js,Product.class);



        return productRepository.addproduct(p).thenApplyAsync(
                ps -> {
                    //return redirect(routes.PersonController.index());
                    return ok("inserted img name.."+ps);
                }, ec.current());}



    public CompletionStage<Result> getProducts() {
        return productRepository.list().thenApplyAsync(p-> {
            return ok(toJson(p.collect(Collectors.toList())));
        }, ec.current());
    }

    public CompletionStage<Result> updateProduct() {
        JsonNode j=request().body().asJson();
        String uid=j.get("pid").asText();
        Long id=Long.parseLong(uid);
        String np=j.get("np").asText();
        int i=Integer.parseInt(np);

        return productRepository.update(id,i).thenApplyAsync(ps -> {
            //return redirect(routes.PersonController.index());
            //String s="{\"email\":\""+ps.email+"\", \"name\":\""+ps.username+"\",\"phone\":\""+ps.phone+"\",\"address\":\""+ps.address+"\"}";

            return ok("updated ros"+ps);
        }, ec.current());
    }
    public CompletionStage<Result> getdProducts() {
        JsonNode j=request().body().asJson();
        String uid=j.get("did").asText();
        Long id=Long.parseLong(uid);
        return productRepository.getdl(id).thenApplyAsync(p-> {
            return ok(toJson(p.collect(Collectors.toList())));
        }, ec.current());
    }
    public CompletionStage<Result> getdProductssum() {
        JsonNode j=request().body().asJson();
        String uid=j.get("did").asText();
        Long id=Long.parseLong(uid);
        return productRepository.getdlsum(id).thenApplyAsync(p-> {
            return ok(toJson(p.collect(Collectors.toList())));
        }, ec.current());
    }
    public CompletionStage<Result> getCProducts() {
        JsonNode j=request().body().asJson();
        String s=j.get("scat").asText();
        return productRepository.getcProducts(s).thenApplyAsync(p-> {
            return ok(toJson(p.collect(Collectors.toList())));
        }, ec.current());
    }
//    public CompletionStage<Result> getSCProducts() {
//        JsonNode j=request().body().asJson();
//        String s=j.get("cat").asText();
//        return productRepository.getscProducts(s).thenApplyAsync(p-> {
//            return ok(toJson(p.collect(Collectors.toList())));
//        }, ec.current());
//    }

    public CompletionStage<Result> singleProduct() {
        JsonNode j = request().body().asJson();
        String i = j.get("id").asText();
        Long id = Long.parseLong(i);
        return productRepository.singleproduct(id).thenApplyAsync(p->{
            return ok(Json.toJson(p));
        },ec.current());
    }

    public CompletionStage<Result> buyProduct() {
        JsonNode j = request().body().asJson();
        String i = j.get("pid").asText();
        Long pid = Long.parseLong(i);
        String k = j.get("cid").asText();
        Long cid = Long.parseLong(k);
        String ap = j.get("aprice").asText();
        int aprice=Integer.parseInt(ap);
        String q = j.get("quant").asText();
        int quant=Integer.parseInt(q);
        String nq = j.get("nquant").asText();
        int nquant=Integer.parseInt(nq);
        return productRepository.buyproduct(pid,cid,aprice,quant,nquant).thenApplyAsync(p->{
            return ok(p);
        },ec.current());

    }






    public CompletionStage<Result> delete(){
        JsonNode j=request().body().asJson();
        String u=j.get("pid").asText();
        Long id=Long.parseLong(u);
        // Person>ps=personRepository.delete(username,password);
        return productRepository.delete(id).thenApplyAsync(ps->{

            return ok("deleted "+ps);

        },ec.current());
    }

    public CompletionStage<Result> deletesearch(){
        JsonNode j=request().body().asJson();
        String u=j.get("name").asText();
        //Long id=Long.parseLong(u);
        // Person>ps=personRepository.delete(username,password);
        return productRepository.deletesearch(u).thenApplyAsync(ps->{

            return ok("deleted "+ps);

        },ec.current());
    }
    public CompletionStage<Result> clist(){
        JsonNode j=request().body().asJson();
        String u=j.get("cid").asText();
        Long id=Long.parseLong(u);
        return productRepository.clist(id).thenApplyAsync(p-> {
            return ok(toJson(p.collect(Collectors.toList())));
        }, ec.current());
    }

    public CompletionStage<Result> cartProduct() {
        JsonNode j = request().body().asJson();
        String i = j.get("pid").asText();
        Long pid = Long.parseLong(i);
        String k = j.get("cid").asText();
        Long cid = Long.parseLong(k);
        String ap = j.get("aprice").asText();
        int aprice=Integer.parseInt(ap);
        String q = j.get("quant").asText();
        int quant=Integer.parseInt(q);
        String nq = j.get("nquant").asText();
        int nquant=Integer.parseInt(nq);
        return productRepository.cartproduct(pid,cid,aprice,quant,nquant).thenApplyAsync(p->{
            return ok(p);
        },ec.current());

    }

    public CompletionStage<Result> Cartlist(){
        JsonNode j=request().body().asJson();
        String u=j.get("cid").asText();
        Long id=Long.parseLong(u);
        return productRepository.cartlist(id).thenApplyAsync(p-> {
            return ok(toJson(p.collect(Collectors.toList())));
        }, ec.current());
    }
    public CompletionStage<Result> Cartnumber(){
        JsonNode j=request().body().asJson();
        String u=j.get("cid").asText();
        Long id=Long.parseLong(u);
        return productRepository.cartnumber(id).thenApplyAsync(p-> {
            return ok(toJson(p.collect(Collectors.toList())));
        }, ec.current());
    }
    public CompletionStage<Result> deleteCart(){
        JsonNode j=request().body().asJson();
        String u=j.get("cid").asText();
        Long cid=Long.parseLong(u);
        String s=j.get("pid").asText();
        Long pid=Long.parseLong(s);
        return productRepository.deletecart(pid,cid).thenApplyAsync(p-> {
            return ok(""+p);
        }, ec.current());
    }


    public CompletionStage<Result> getSearchProducts() {
        JsonNode j=request().body().asJson();
        String s=j.get("search").asText();
        return productRepository.getSearchProducts(s).thenApplyAsync(p-> {
            return ok(toJson(p.collect(Collectors.toList())));
        }, ec.current());
    }
    public CompletionStage<Result> getSearchReq() {
        return productRepository.slist().thenApplyAsync(searchStream -> {
            return ok(toJson(searchStream.collect(Collectors.toList())));
        }, ec.current());
    }

    public CompletionStage<Result> addSearchProduct() {
        JsonNode j=request().body().asJson();
        String s=j.get("search").asText();
        //String email=j.get("email").asText();
        Long cid=j.get("id").asLong();
        return productRepository.addSearchProduct(cid,s).thenApplyAsync(p-> {
            return ok(p);
        }, ec.current());
    }

    public CompletionStage<Result> customerSearch(){
        JsonNode j=request().body().asJson();
        String u=j.get("cid").asText();
        Long cid=Long.parseLong(u);

        return productRepository.customerSearch(cid).thenApplyAsync(p-> {
            return ok(""+p);
        }, ec.current());
    }


}


