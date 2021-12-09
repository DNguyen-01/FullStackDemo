package com.zipcode.FullStackDemo.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 *  @Entity - Specifies that the class is an entity and is mapped to a database table
 * @Table - Name of the table in the database, can also specify schema to distinguish one set of tables from another
 * i.e @Table(name = "students", schema = "roster")
 **/
@Entity
@Table(name = "students")
public class Student {
    
    @Id
    @GeneratedValue
    private Long id;

    private String firstName;
    private String lastName;
    private String cohort;


    public Student() {
    }


    public Student(Long id, String firstName, String lastName, String cohort) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.cohort = cohort;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return this.firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return this.lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getCohort() {
        return this.cohort;
    }

    public void setCohort(String cohort) {
        this.cohort = cohort;
    }


}
