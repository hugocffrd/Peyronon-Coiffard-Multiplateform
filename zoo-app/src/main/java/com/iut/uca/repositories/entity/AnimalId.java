package com.iut.uca.repositories.entity;

import org.bson.types.ObjectId;

public class AnimalId {
    private ObjectId _id;
    public AnimalId() {}
    public AnimalId(ObjectId id) {
      this._id = id;
    }
    public ObjectId getId() {
      return _id;
    }
    public void setId(ObjectId id) {
      this._id = id;
    }

}
