package com.iut.uca.api.dto;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import org.bson.codecs.pojo.annotations.BsonId;

public class User {
  @BsonId
  private String id;
  private String name;
  private String surname;
  private String email;
  private String password;
  private List<Animal> animals;

  public User() {}

  public User(String id, String name, String surname, String email, String password) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.password = password;
    this.animals = new ArrayList<>();

  }

  public User(String id, String name, String surname, String email, String password,
      List<Animal> animals) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.password = password;
    this.animals = animals;
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
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

  public List<Animal> getAnimals() {
    return animals;
  }

  public void setAnimals(List<Animal> animals) {
    this.animals = animals;
  }

  public void addAnimalToList(Animal animal) {
    this.animals.add(animal);
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    User user = (User) o;
    return id == user.id && Objects.equals(name, user.name) && Objects.equals(
        surname, user.surname) && Objects.equals(email, user.email)
        && Objects.equals(password, user.password) && Objects.equals(animals,
        user.animals);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, name, surname, email, password, animals);
  }

  @Override
  public String toString() {
    return "User{" +
        "id=" + id +
        ", name='" + name + '\'' +
        ", surname='" + surname + '\'' +
        ", email='" + email + '\'' +
        ", password='" + password + '\'' +
        ", animals=" + animals +
        '}';
  }
}

