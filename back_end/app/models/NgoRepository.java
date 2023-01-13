package models;

import com.google.inject.ImplementedBy;

import java.util.concurrent.CompletionStage;
import java.util.stream.Stream;

/**
 * This interface provides a non-blocking API for possibly blocking operations.
 */
@ImplementedBy(JPANgoRepository.class)
public interface NgoRepository {

    CompletionStage<Ngo> addngo(Ngo ngo);
    CompletionStage<Stream<Ngo>> list();
    CompletionStage<Stream<Ngo>> list1();
    CompletionStage<Ngo> login1(Long id);
    CompletionStage<Ngo> updateNgodetails(Long id,String username,String password,String email,Long phone,String address);
    abstract Ngo login(String email,String password);
    CompletionStage<Integer> updateNgo(Long id,Integer s);
    CompletionStage<Integer> delete(Long id);
    CompletionStage<Stream<Ngo>> summary(Long id);
}
