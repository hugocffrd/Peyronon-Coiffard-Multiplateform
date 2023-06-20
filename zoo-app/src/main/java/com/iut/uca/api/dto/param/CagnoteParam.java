package com.iut.uca.api.dto.param;


import java.util.List;
import java.util.Objects;

/**
 * Cagnote values which could be got by front
 */
public class CagnoteParam {
  private String id;
  private long amount;
  private String animalId;
  private List<String> usersId;
  private long amountToAdd;
  private String idUserToAdd;

  public CagnoteParam() {}

  public CagnoteParam(String id, long amount, String animalId, List<String> usersId,
      long amountToAdd, String idUserToAdd) {
    this.id = id;
    this.amount = amount;
    this.animalId = animalId;
    this.usersId = usersId;
    this.amountToAdd = amountToAdd;
    this.idUserToAdd = idUserToAdd;
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

  public long getAmountToAdd() {
    return amountToAdd;
  }

  public void setAmountToAdd(long amountToAdd) {
    this.amountToAdd = amountToAdd;
  }

  public String getIdUserToAdd() {
    return idUserToAdd;
  }

  public void setIdUserToAdd(String idUserToAdd) {
    this.idUserToAdd = idUserToAdd;
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
    return amount == that.amount && amountToAdd == that.amountToAdd && Objects.equals(id,
        that.id) && Objects.equals(animalId, that.animalId) && Objects.equals(
        usersId, that.usersId) && Objects.equals(idUserToAdd, that.idUserToAdd);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, amount, animalId, usersId, amountToAdd, idUserToAdd);
  }

  @Override
  public String toString() {
    return "CagnoteParam{" +
        "id='" + id + '\'' +
        ", amount=" + amount +
        ", animalId='" + animalId + '\'' +
        ", usersId=" + usersId +
        ", amountToAdd=" + amountToAdd +
        ", idUserToAdd='" + idUserToAdd + '\'' +
        '}';
  }
}
