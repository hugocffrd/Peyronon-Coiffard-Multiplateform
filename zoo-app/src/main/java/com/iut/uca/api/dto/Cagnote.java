package com.iut.uca.api.dto;

import java.util.List;
import java.util.Objects;

public class Cagnote {

  private String id;
  private Animal animal;
  private List<User> users;
  private long amount;
  public Cagnote() {}

  public Cagnote(String id, Animal animal, List<User> users, long amount) {
    this.id = id;
    this.animal = animal;
    this.users = users;
    this.amount = amount;
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public Animal getAnimal() {
    return animal;
  }

  public void setAnimal(Animal animal) {
    this.animal = animal;
  }

  public List<User> getUsers() {
    return users;
  }

  public void setUsers(List<User> users) {
    this.users = users;
  }

  public long getAmount() {
    return amount;
  }

  public void setAmount(long amount) {
    this.amount = amount;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Cagnote cagnote = (Cagnote) o;
    return amount == cagnote.amount && Objects.equals(id, cagnote.id)
        && Objects.equals(animal, cagnote.animal) && Objects.equals(users,
        cagnote.users);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, animal, users, amount);
  }

  @Override
  public String toString() {
    return "Cagnote{" +
        "id='" + id + '\'' +
        ", animal=" + animal +
        ", users=" + users +
        ", amount=" + amount +
        '}';
  }
}
