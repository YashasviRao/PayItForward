package controllers;

import com.fasterxml.jackson.databind.JsonNode;
import models.Category;
import models.CategoryRepository;
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

public class CategoryController extends Controller {

    private final FormFactory formFactory;
    private final CategoryRepository catRepository;
    private final HttpExecutionContext ec;

    @Inject
    public CategoryController(FormFactory formFactory, CategoryRepository catRepository, HttpExecutionContext ec) {
        this.formFactory = formFactory;
        this.catRepository = catRepository;
        this.ec = ec;
    }
    public CompletionStage<Result> getCats() {
        return catRepository.catlist().thenApplyAsync(p -> {

            return ok(toJson(p.collect(Collectors.toList())));
        }, ec.current());
    }
    public CompletionStage<Result> getSubCats() {
        JsonNode j=request().body().asJson();
        String cat=j.get("cat").asText();
        return catRepository.subcatlist(cat).thenApplyAsync(p -> {
            return ok(toJson(p.collect(Collectors.toList())));
        }, ec.current());
    }
    public CompletionStage<Result> getSubCat_images() {
        JsonNode j=request().body().asJson();
        String cat=j.get("cat").asText();
        return catRepository.subcat_imagelist(cat).thenApplyAsync(p -> {
            return ok(toJson(p.collect(Collectors.toList())));
        }, ec.current());
    }
    public CompletionStage<Result> addnewcategory(){
        JsonNode j=request().body().asJson();
        String p=j.get("pname").asText();
        String cat=j.get("category").asText();
        String scat=j.get("subcategory").asText();
        String img=j.get("file2").asText();
        return catRepository.addcat(p,cat,scat,img).thenApplyAsync(ps->{

            return ok("added "+ps);

        },ec.current());
    }
    public CompletionStage<Result> donorreqlist() {
        return catRepository.dreqlist().thenApplyAsync(p -> {

            return ok(toJson(p.collect(Collectors.toList())));
        }, ec.current());
    }

    public CompletionStage<Result> redonatelist() {

        JsonNode j=request().body().asJson();
        String id=j.get("did").asText();
        Long did = Long.parseLong(id);
        return catRepository.redonatelist(did).thenApplyAsync(p -> {

            return ok(toJson(p.collect(Collectors.toList())));
        }, ec.current());
    }

    public CompletionStage<Result> catalogSearch() {
        return catRepository.catalog().thenApplyAsync(searchStream -> {
            return ok(toJson(searchStream.collect(Collectors.toList())));
        }, ec.current());
    }

    public CompletionStage<Result> donate_sell_fund() {
        return catRepository.dsf().thenApplyAsync(searchStream -> {
            return ok(toJson(searchStream.collect(Collectors.toList())));
        }, ec.current());
    }

}