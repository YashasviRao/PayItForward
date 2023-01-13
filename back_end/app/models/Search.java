package models;

import javax.persistence.*;


@Entity
@Table(name="Search")
public class Search {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    public Long id;

    public Long cid;
    public String search;
    public int status;

}
