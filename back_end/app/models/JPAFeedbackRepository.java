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


public class JPAFeedbackRepository implements FeedbackRepository {

    private final JPAApi jpaApi;
    private final DatabaseExecutionContext executionContext;

    @Inject
    public JPAFeedbackRepository(JPAApi jpaApi, DatabaseExecutionContext executionContext) {
        this.jpaApi = jpaApi;
        this.executionContext = executionContext;
    }
    @Override
    public CompletionStage<Feedback> feedback(Feedback feedback) {
        return supplyAsync(() -> wrap(em -> insert(em, feedback)), executionContext);
    }

    @Override
    public CompletionStage<Integer> delete(Long id) {
        return supplyAsync(() -> wrap(em -> del(em,id)), executionContext);
    }

    @Override
    public CompletionStage<Stream<Feedback>>list() {
        return supplyAsync(() -> wrap(em -> list(em)), executionContext);
    }

    private <T> T wrap(Function<EntityManager, T> function) {
        return jpaApi.withTransaction(function);
    }

    private Feedback insert(EntityManager em, Feedback feedback) {
        em.persist(feedback);
        return feedback;
    }

    private Stream<Feedback> list(EntityManager em) {
        List<Feedback> persons = em.createQuery("select id,username,email,phone,msg from Feedback f").getResultList();
        return persons.stream();
    }

    private int del(EntityManager em,Long id) {

        int f= em.createQuery("Delete  from Feedback p where p.id=:id").setParameter("id", id).executeUpdate();
        return f;

    }
}