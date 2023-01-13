package models;

import javax.persistence.*;
import java.math.BigInteger;

@Entity
public class Feedback {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    public Long id;

    public String username;
    public String email;
    public BigInteger phone;
    public String msg;
}