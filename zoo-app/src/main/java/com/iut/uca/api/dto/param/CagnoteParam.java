package com.iut.uca.api.dto.param;


import java.util.List;
import java.util.Objects;

public class CagnoteParam {
  private String id;
  private long amount;
  private String animalId;
  private List<String> usersId;

  public CagnoteParam(String id, long amount, String animalId, List<String> usersId) {
    this.id = id;
    this.amount = amount;
    this.animalId = animalId;
    this.usersId = usersId;
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public long getAmount() {
    return amount;
  }

  public void setAmount(long amount) {
    this.amount = amount;
  }

  public String getAnimalId() {
    return animalId;
  }

  public void setAnimalId(String animalId) {
    this.animalId = animalId;
  }

  public List<String> getUsersId() {
    return usersId;
  }

  public void setUsersId(List<String> usersId) {
    this.usersId = usersId;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CagnoteParam that = (CagnoteParam) o;
    return amount == that.amount && Objects.equals(id, that.id) && Objects.equals(
        animalId, that.animalId) && Objects.equals(usersId, that.usersId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, amount, animalId, usersId);
  }

  @Override
  public String toString() {
    return "CagnoteParam{" +
        "id='" + id + '\'' +
        ", amount=" + amount +
        ", animalId='" + animalId + '\'' +
        ", usersId=" + usersId +
        '}';
  }
}
