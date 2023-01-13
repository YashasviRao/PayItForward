package controllers;

import com.fasterxml.jackson.databind.JsonNode;
import models.Test;
import models.TestRepository;
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

public class TestController extends Controller {

    private final FormFactory formFactory;
    private final TestRepository testRepository;
    private final HttpExecutionContext ec;

    @Inject
    public TestController(FormFactory formFactory, TestRepository testRepository, HttpExecutionContext ec) {
        this.formFactory = formFactory;
        this.testRepository = testRepository;
        this.ec = ec;
    }

    public Result index() {
        return ok(views.html.index.render());
    }

    public CompletionStage<Result> addimg() {
        JsonNode js=request().body().asJson();
        Test n= Json.fromJson(js,Test.class);
        return testRepository.addimg(n).thenApplyAsync(p -> {
            //return redirect(routes.PersonController.index());
            return ok("inserted img name.."+p.img);
        }, ec.current());
    }
}