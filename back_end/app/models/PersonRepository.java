package models;

        import com.google.inject.ImplementedBy;

        import java.util.concurrent.CompletionStage;
        import java.util.stream.Stream;
        import java.math.BigInteger;

/**
 * This interface provides a non-blocking API for possibly blocking operations.
 */
@ImplementedBy(JPAPersonRepository.class)
public interface PersonRepository {

    CompletionStage<Person> add(Person person);
   CompletionStage<Person> update(Long id,String username,String password,String email,BigInteger phone,String address);
    CompletionStage<Stream<Person>> list();
    CompletionStage<Person> delete(String name,String password);
    abstract Person login(String email,String password);
    CompletionStage<Person> login1(Long id);
    CompletionStage<String> getEmail(Long id);


}
