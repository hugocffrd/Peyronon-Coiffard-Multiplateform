package com.iut.uca.repositories.entity;
import java.util.List;
import org.bson.codecs.pojo.annotations.BsonId;
import org.bson.types.ObjectId;

public class CagnoteEntity {
  @BsonId
  private ObjectId _id;
  private long amount;
  private AnimalId animalId;
  private List<UserId> userIds;

  public CagnoteEntity() {}

  public CagnoteEntity(ObjectId id, long amount, AnimalId animalId, List<UserId> userIds) {
    this._id = id;
    this.amount = amount;
    this.animalId = animalId;
    this.userIds = userIds;
  }

  public ObjectId getId() {
    return _id;
  }

  public void setId(ObjectId id) {
    this._id = id;
  }

  public long getAmount() {
    return amount;
  }

  public void setAmount(long amount) {
    this.amount = amount;
  }

  public void addAmount(long amountToAdd) {
    this.amount += amountToAdd;
  }

  public AnimalId getAnimalId() {
    return animalId;
  }

  public void setAnimalId(AnimalId animalId) {
    this.animalId = animalId;
  }

  public List<UserId> getUserIds() {
    return userIds;
  }

  public void setUserIds(List<UserId> userIds) {
    this.userIds = userIds;
  }
  public void addUserId(String id) {
    this.userIds.add(new UserId(new ObjectId(id)));
  }


}