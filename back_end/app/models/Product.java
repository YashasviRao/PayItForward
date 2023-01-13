package models;

import javax.persistence.*;
import java.math.BigInteger;
import java.util.Date;

@Entity
@Table(name="Product")
public class Product {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    public Long pid;
    public Long did;


    public Integer quant;
    public Integer state;
    public Integer nprice;
    public String ngo;
    public String pname;
    public String quality;
    public String des;
    public String img1;
    public String img2;
    public String cat;
    public String scat;
    public Date expdate;
    public Integer cost;
    public Integer year;
}