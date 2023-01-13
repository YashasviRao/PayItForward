package models;

import com.google.inject.ImplementedBy;

import java.util.concurrent.CompletionStage;
import java.util.stream.Stream;
import com.fasterxml.jackson.databind.JsonNode;
import play.libs.Json;

/**
 * This interface provides a non-blocking API for possibly blocking operations.
 */
@ImplementedBy(JPAProductRepository.class)
public interface ProductRepository {

    CompletionStage<String> addproduct(Product product);
    //abstract String addProduct(Product product);
    CompletionStage<Stream<Product>> list();
    CompletionStage<Integer> update(Long id,Integer np);
    CompletionStage<Stream<Product>> getdl(Long did);
    CompletionStage<Stream<Product>> getdlsum(Long did);
    CompletionStage<Stream<Product>> getcProducts(String scat);
    //CompletionStage<Stream<Product>> getscProducts(String cat);
    CompletionStage<Integer> delete(Long id);
    CompletionStage<Integer> deletesearch(String search);
    CompletionStage<Product> singleproduct(Long id);
    CompletionStage<String> buyproduct(Long id,Long cid,Integer aprice,Integer quant,Integer nquant);
    CompletionStage<String> cartproduct(Long id,Long cid,Integer aprice,Integer quant,Integer nquant);
    CompletionStage<Stream<Product>> clist(Long id);
    CompletionStage<Stream<Product>> cartlist(Long id);
    CompletionStage<Stream<Long>> cartnumber(Long id);
    CompletionStage<Integer> deletecart(Long pid,Long cid);
    CompletionStage<Stream<Product>> getSearchProducts(String search);
    CompletionStage<String> addSearchProduct(Long cid,String search);
    CompletionStage<String> customerSearch(Long id);
    CompletionStage<Stream<Product>> slist();

    //customer product
    //abstract Product buyproduct(Long id,Integer quant,Integer nquant);
    //abstract String getdl(Long id);

}