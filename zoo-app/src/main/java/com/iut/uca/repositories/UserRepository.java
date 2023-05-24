package com.iut.uca.repositories;

import com.iut.uca.repositories.entity.UserEntity;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import jakarta.inject.Inject;
import java.util.ArrayList;
import java.util.List;
import org.bson.Document;
import org.bson.types.ObjectId;

public class UserRepository implements IRepository<UserEntity>{

  @Inject
  MongoDatabase mongoDatabase;
  @Override
  public MongoCollection<UserEntity> getCollection() {
    return mongoDatabase.getCollection("user", UserEntity.class);
  }
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
  public UserEntity get(long id) {
    Document query = new Document("_id", new ObjectId(String.valueOf(id)));
    return getCollection().find(query).first();
  }

  @Override
  public List<UserEntity> list() {
    FindIterable<UserEntity> results = getCollection().find();
    List<UserEntity> userList = new ArrayList<>();
    for (UserEntity userEntity : results) {
      userList.add(userEntity);
    }
    return userList;
  }

  @Override
  public void update(long id, UserEntity updatedUser) {
    Document query = new Document("_id", new ObjectId(String.valueOf(id)));
    Document updatedDocument = new Document("$set", new Document()
        .append("name", updatedUser.getName())
        .append("surname", updatedUser.getSurname())
        .append("email", updatedUser.getEmail())
        .append("password", updatedUser.getPassword())
        .append("animals", updatedUser.getAnimals()));
    getCollection().updateOne(query, updatedDocument);

  }

  @Override
  public void delete(long id) {
    getCollection().deleteOne(new Document("_id", id));
  }
}
