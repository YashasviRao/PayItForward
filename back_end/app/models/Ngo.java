package models;

import javax.persistence.*;
import java.math.BigInteger;

@Entity
public class Ngo {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    public Long id;

    public String username;
    public String email;
    public Long phone;
    public String address;
    public String password;
    public Integer state=0;
}
