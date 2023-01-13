package models;

import javax.persistence.*;
import java.math.BigInteger;

@Entity
//@Table(name="Category")
public class Category {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    public Long catid;


    public String pname;
    public String img1;
    public String cat;
    public String scat;
}