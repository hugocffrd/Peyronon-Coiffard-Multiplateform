package com.iut.uca.repositories;

import com.iut.uca.repositories.entity.UserEntity;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import java.util.List;
import org.bson.Document;
import org.bson.types.ObjectId;

public class UserRepository implements  IRepository<UserEntity>{

  private MongoClient mongoClient;
  private MongoDatabase mongoDatabase;

  @Override
  public UserEntity insert(UserEntity entity) {
    MongoCollection<Document> collection= mongoDatabase.getCollection("user");
    ObjectId id = new ObjectId();
    entity.setId(id);
    Document document = new Document("_id", entity.getId())
        .append("name", entity.getName())
        .append("surname", entity.getSurname())
        .append("email", entity.getEmail())
        .append("password", entity.getPassword())
        .append("animals", entity.getAnimals());
    collection.insertOne(document);
    return entity;
  }

  @Override
  public List<UserEntity> list() {
    return null;
  }

  @Override
  public UserEntity update(ObjectId id) {
    return null;
  }

  @Override
  public void delete(ObjectId id) {

  }
}
