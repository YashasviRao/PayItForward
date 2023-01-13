package controllers;

import com.fasterxml.jackson.databind.JsonNode;
import models.Person;
import models.Product;
import models.Ngo;
import models.PersonRepository;
import models.NgoRepository;
import models.ProductRepository;
import play.data.FormFactory;
import play.libs.Json;
import play.libs.concurrent.HttpExecutionContext;
import play.mvc.Controller;
import play.mvc.Result;
import java.util.Map;
import java.util.List;
import java.math.BigInteger;

import play.mvc.Http.Response;
import com.fasterxml.jackson.databind.ObjectMapper;

import javax.inject.Inject;
import java.util.concurrent.CompletionStage;
import java.util.stream.Collectors;

import static play.libs.Json.toJson;

/**
 * The controller keeps all database operations behind the repository, and uses
 * {@link play.libs.concurrent.HttpExecutionContext} to provide access to the
 * {@link play.mvc.Http.Context} methods like {@code request()} and {@code flash()}.
 */
public class PersonController extends Controller {

    private final FormFactory formFactory;
    private final PersonRepository personRepository;
    private final NgoRepository ngoRepository;
    private final ProductRepository productRepository;
    private final HttpExecutionContext ec;

    @Inject
    public PersonController(FormFactory formFactory, PersonRepository personRepository,NgoRepository ngoRepository, ProductRepository productRepository, HttpExecutionContext ec) {
        this.formFactory = formFactory;
        this.personRepository = personRepository;
        this.ngoRepository=ngoRepository;
        this.productRepository = productRepository;
        this.ec = ec;
    }

    public Result index()
    {
        return ok(views.html.index.render());
    }

    public CompletionStage<Result> addPerson() {
        JsonNode js=request().body().asJson();
        Person person= Json.fromJson(js,Person.class);
        return personRepository.add(person).thenApplyAsync(p -> {
            //return redirect(routes.PersonController.index());
            return ok("inserted name.."+person.username);
        }, ec.current());
    }

    public CompletionStage<Result> updatePerson() {
        JsonNode j=request().body().asJson();
        String uid=j.get("id").asText();
        Long id=Long.parseLong(uid);
        String username=j.get("username").asText();
        String password=j.get("password").asText();
        String email=j.get("email").asText();
        String phone=j.get("phone").asText();
        String address=j.get("address").asText();
        BigInteger p=new BigInteger(phone);
        return personRepository.update(id,username,password,email,p,address).thenApplyAsync(ps -> {
            //return redirect(routes.PersonController.index());
            String s="{\"email\":\""+ps.email+"\", \"name\":\""+ps.username+"\",\"password\":\"" + ps.password + "\",\"phone\":\""+ps.phone+"\",\"address\":\""+ps.address+"\"}";
            return ok(s);
        }, ec.current());
    }

    public CompletionStage<Result> delete(){
        JsonNode j=request().body().asJson();
        String username=j.get("username").asText();
        String password=j.get("password").asText();
       // Person>ps=personRepository.delete(username,password);
        return personRepository.delete(username,password).thenApplyAsync(ps->{

            return ok("logged in..."+username);

        },ec.current());
    }

    public CompletionStage<Result> getPersons() {
        return personRepository.list().thenApplyAsync(personStream -> {
            return ok(toJson(personStream.collect(Collectors.toList())));
        }, ec.current());
    }

    public Result login()
    {
        Ngo n=null;
        Person ps=null;
        JsonNode j=request().body().asJson();
        String email=j.get("email").asText();
        String password=j.get("password").asText();
        boolean ifngo=j.get("ifngo").asBoolean();
        if(ifngo)
            n=ngoRepository.login(email,password);
        else
            ps=personRepository.login(email,password);

        if(ps==null&&n==null){
            return ok("not a valid user");
        }
        else{
            String s="";
            if(ps!=null)
             s="{\"id\":"+ps.id+"}";
            else
                s="{\"id\":"+n.id+"}";
              return ok(Json.parse(s));
        }

    }


      public CompletionStage<Result> login1() {
        JsonNode j = request().body().asJson();
        String i = j.get("id").asText();
        Long id = Long.parseLong(i);
       // Product p=productRepository.getdl(id)
       return personRepository.login1(id).thenApplyAsync(ps->{if (ps == null) {
           return ok("not a valid user");
       } else {
           String s = "{\"email\":\"" + ps.email + "\", \"name\":\"" + ps.username + "\", \"password\":\"" + ps.password + "\",\"phone\":\"" + ps.phone + "\",\"address\":\"" + ps.address + "\"}";
           return ok(Json.parse(s));
       }});



    }

    public CompletionStage<Result> getEmail() {
        JsonNode j = request().body().asJson();
        String i = j.get("id").asText();
        Long id = Long.parseLong(i);

        // Product p=productRepository.getdl(id)
        return personRepository.getEmail(id).thenApplyAsync(ps->{
            String s = "{\"email\":\"" + ps +"\"}";
            return ok(Json.parse(s));
        });



    }

}
