package com.iut.uca.api.dto.param;

import com.iut.uca.api.dto.Animal;
import java.util.List;
import java.util.Objects;

/**
 * User values which could be got by front
 */
public class UserParam {

  private String id;
  private String name;
  private String surname;
  private String email;
  private String password;
  private List<String> animalIds;
  private Animal animal;
  private String newPassword;
  public UserParam() {}
  public UserParam(String id, String name, String surname, String email, String password,
      List<String> animalIds, Animal animal, String newPassword) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.password = password;
    this.animalIds = animalIds;
    this.animal = animal;
    this.newPassword = newPassword;
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

  public List<String> getAnimalIds() {
    return animalIds;
  }

  public void setAnimalIds(List<String> animalIds) {
    this.animalIds = animalIds;
  }

  public String getNewPassword() {
    return newPassword;
  }

  public void setNewPassword(String newPassword) {
    this.newPassword = newPassword;
  }

  public Animal getAnimal() {
    return animal;
  }

  public void setAnimal(Animal animal) {
    this.animal = animal;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    UserParam userParam = (UserParam) o;
    return Objects.equals(id, userParam.id) && Objects.equals(name,
        userParam.name) && Objects.equals(surname, userParam.surname)
        && Objects.equals(email, userParam.email) && Objects.equals(password,
        userParam.password) && Objects.equals(animalIds, userParam.animalIds)
        && Objects.equals(animal, userParam.animal) && Objects.equals(newPassword,
        userParam.newPassword);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, name, surname, email, password, animalIds, animal, newPassword);
  }

  @Override
  public String toString() {
    return "UserParam{" +
        "id='" + id + '\'' +
        ", name='" + name + '\'' +
        ", surname='" + surname + '\'' +
        ", email='" + email + '\'' +
        ", password='" + password + '\'' +
        ", animalIds=" + animalIds +
        ", animal=" + animal +
        ", newPassword='" + newPassword + '\'' +
        '}';
  }
}
