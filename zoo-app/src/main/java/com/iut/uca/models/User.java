package com.iut.uca.models;

import java.util.ArrayList;
import java.util.List;

public class User {
  private long id;
  private String name;
  private String surname;
  private String email;
  private String password;
  private List<Animal> animals;

  public User(long id, String name, String surname, String email, String password,
      List<Animal> animals) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.password = password;
    this.animals = animals.isEmpty() ? new ArrayList<>() : animals;
  }

  public long getId() {
    return id;
  }

  public void setId(long id) {
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
}

