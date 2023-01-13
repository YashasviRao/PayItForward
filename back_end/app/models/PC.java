package models;

import javax.persistence.*;
import java.math.BigInteger;

@Entity
@Table(name="PC")
public class PC {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    public Long id;

    public int aprice;
    public int nquant;
    public Long  pid;
    public Long cid;
    public int cart;
    //public long total;


}
