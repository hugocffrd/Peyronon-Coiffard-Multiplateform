package com.iut.uca.repositories.entity;

import java.util.ArrayList;
import java.util.List;
import org.bson.codecs.pojo.annotations.BsonId;
import org.bson.types.ObjectId;

public class UserEntity  {

    @BsonId
    private ObjectId id;
    private String name;
    private String surname;
    private String email;
    private String password;
    private List<AnimalId> animalIds;

    public UserEntity() {}

    public UserEntity(ObjectId id, String name, String surname, String email, String password) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
        this.animalIds = new ArrayList<>();
    }

    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<AnimalId> getAnimalIds() {
        return animalIds;
    }

    public void setAnimalIds(List<AnimalId> animalIds) {
        this.animalIds = animalIds;
    }
}
