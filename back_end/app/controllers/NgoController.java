package controllers;

import com.fasterxml.jackson.databind.JsonNode;
import models.Ngo;
import models.NgoRepository;
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

public class NgoController extends Controller {

    private final FormFactory formFactory;
    private final NgoRepository ngoRepository;
    private final HttpExecutionContext ec;

    @Inject
    public NgoController(FormFactory formFactory, NgoRepository ngoRepository, HttpExecutionContext ec) {
        this.formFactory = formFactory;
        this.ngoRepository = ngoRepository;
        this.ec = ec;
    }

    public Result index() {
        return ok(views.html.index.render());
    }

    public CompletionStage<Result> addNgo() {
        JsonNode js=request().body().asJson();
        Ngo n= Json.fromJson(js,Ngo.class);
        return ngoRepository.addngo(n).thenApplyAsync(p -> {
            //return redirect(routes.PersonController.index());
            return ok("inserted ngo name.."+p.username);
        }, ec.current());
    }

    public CompletionStage<Result> getNgos() {
        return ngoRepository.list().thenApplyAsync(p -> {

            return ok(toJson(p.collect(Collectors.toList())));
        }, ec.current());
    }
    public CompletionStage<Result> getNgosList() {
        return ngoRepository.list1().thenApplyAsync(p -> {

            return ok(toJson(p.collect(Collectors.toList())));
        }, ec.current());
    }

    public CompletionStage<Result> ngosummary() {
        JsonNode j=request().body().asJson();
        String uid=j.get("name").asText();
        Long id=Long.parseLong(uid);
        return ngoRepository.summary(id).thenApplyAsync(p-> {
            return ok(toJson(p.collect(Collectors.toList())));
        }, ec.current());
    }
    public CompletionStage<Result> updateNgo() {
        JsonNode j=request().body().asJson();
        String uid=j.get("id").asText();
        Long id=Long.parseLong(uid);
        //String state=j.get("state").asText();
        // int s=Integer.parseInt(state);
        int s=j.get("state").asInt();
        return ngoRepository.updateNgo(id,s).thenApplyAsync(ps -> {
            return ok("updated ros"+ps);
        }, ec.current());
    }


    public CompletionStage<Result> delete(){
        JsonNode j=request().body().asJson();
        String u=j.get("id").asText();
        Long id=Long.parseLong(u);
        // Person>ps=personRepository.delete(username,password);
        return ngoRepository.delete(id).thenApplyAsync(ps->{

            return ok("deleted "+ps);

        },ec.current());
    }

    public CompletionStage<Result> login1() {
        JsonNode j = request().body().asJson();
        String i = j.get("id").asText();
        Long id = Long.parseLong(i);

        // Product p=productRepository.getdl(id)
        return ngoRepository.login1(id).thenApplyAsync(ps -> {
            if (ps == null) {
                return ok("not a valid user");
            } else {
                String s = "{\"email\":\"" + ps.email + "\", \"name\":\"" + ps.username + "\", \"password\":\"" + ps.password + "\",\"phone\":\"" + ps.phone + "\",\"address\":\"" + ps.address + "\"}";
                return ok(Json.parse(s));
            }
        });
    }
       public CompletionStage<Result> updateNgodetails() {
            JsonNode j = request().body().asJson();
            String uid = j.get("id").asText();
            Long id = Long.parseLong(uid);
            String username = j.get("username").asText();
           String password = j.get("password").asText();
            String email = j.get("email").asText();
            String phone = j.get("phone").asText();
            String address = j.get("address").asText();
            Long p = Long.parseLong(phone);
            return ngoRepository.updateNgodetails(id, username,password, email, p, address).thenApplyAsync(ps -> {
                //return redirect(routes.PersonController.index());
                String s = "{\"email\":\"" + ps.email + "\", \"name\":\"" + ps.username + "\",\"password\":\"" + ps.password + "\",\"phone\":\"" + ps.phone + "\",\"address\":\"" + ps.address + "\"}";
                return ok(s);
            }, ec.current());
        }

    }
