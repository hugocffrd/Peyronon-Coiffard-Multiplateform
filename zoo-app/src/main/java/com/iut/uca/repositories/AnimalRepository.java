package com.iut.uca.repositories;

import com.iut.uca.repositories.entity.AnimalEntity;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoDatabase;
import java.util.List;
import org.bson.types.ObjectId;

public class AnimalRepository implements IRepository<AnimalEntity> {

  private MongoClient mongoClient;
  private MongoDatabase mongoDatabase;
  
  @Override
  public AnimalEntity insert(AnimalEntity entity) {
    return null;
  }

  @Override
  public List<AnimalEntity> list() {
    return null;
  }

  @Override
  public AnimalEntity update(ObjectId id) {
    return null;
  }

  @Override
  public void delete(ObjectId id) {

  }
}
