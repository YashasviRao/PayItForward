package models;

import com.google.inject.ImplementedBy;

import java.util.concurrent.CompletionStage;
import java.util.stream.Stream;

/**
 * This interface provides a non-blocking API for possibly blocking operations.
 */
@ImplementedBy(JPAFeedbackRepository.class)
public interface FeedbackRepository {

    CompletionStage<Feedback> feedback(Feedback feedback);
    CompletionStage<Stream<Feedback>> list();
    CompletionStage<Integer> delete(Long id);

}