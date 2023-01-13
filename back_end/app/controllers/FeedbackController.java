package controllers;

import com.fasterxml.jackson.databind.JsonNode;
import models.Feedback;
import models.FeedbackRepository;
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

public class FeedbackController extends Controller {

    private final FormFactory formFactory;
    private final FeedbackRepository feedbackRepository;
    private final HttpExecutionContext ec;

    @Inject
    public FeedbackController(FormFactory formFactory, FeedbackRepository feedbackRepository, HttpExecutionContext ec) {
        this.formFactory = formFactory;
        this.feedbackRepository = feedbackRepository;
        this.ec = ec;
    }

    public Result index() {
        return ok(views.html.index.render());
    }

//    public CompletionStage<Feedback> viewfeedback() {
//        return feedbackRepository.list().thenApplyAsync(p-> {
//            return ok(toJson(p.collect(Collectors.toList())));
//        }, ec.current());
//    }

    public CompletionStage<Result> feedback() {
        JsonNode js=request().body().asJson();
        Feedback f= Json.fromJson(js,Feedback.class);
        return feedbackRepository.feedback(f).thenApplyAsync(p -> {
            //return redirect(routes.PersonController.index());
            return ok("inserted feedback..");
        }, ec.current());
    }

    public CompletionStage<Result> getFeedback() {
        return feedbackRepository.list().thenApplyAsync(personStream -> {
            return ok(toJson(personStream.collect(Collectors.toList())));
        }, ec.current());
    }

    public CompletionStage<Result> delete(){
        JsonNode j=request().body().asJson();
        String u=j.get("id").asText();
        Long id=Long.parseLong(u);
        // Person>ps=personRepository.delete(username,password);
        return feedbackRepository.delete(id).thenApplyAsync(ps->{

            return ok("deleted "+ps);

        },ec.current());
    }
}