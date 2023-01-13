package models;

import com.google.inject.ImplementedBy;

import java.util.concurrent.CompletionStage;
import java.util.stream.Stream;

/**
 * This interface provides a non-blocking API for possibly blocking operations.
 */
@ImplementedBy(JPACategoryRepository.class)
public interface CategoryRepository {

    CompletionStage<Stream<Category>> catlist();
    CompletionStage<Stream<Category>> subcatlist(String cat);
    CompletionStage<Stream<Category>> subcat_imagelist(String cat);
    CompletionStage<String> addcat(String pname,String cat,String scat,String img);
    CompletionStage<Stream<Category>> dreqlist();
    CompletionStage<Stream<Category>> redonatelist(Long did);
    CompletionStage<Stream<Category>> catalog();
    CompletionStage<Stream<Long>> dsf();
}
