package com.iut.uca.repositories;

import com.iut.uca.configuration.Configuration;
import com.iut.uca.repositories.entity.UserEntity;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import jakarta.inject.Inject;
import jakarta.inject.Singleton;
import java.util.ArrayList;
import java.util.List;
import org.bson.Document;
import org.bson.codecs.configuration.CodecRegistry;
import org.bson.types.ObjectId;
@Singleton
public class UserRepository implements IRepository<UserEntity>{
  @Inject
  MongoClient mongoClient;
  @Inject
  Configuration configuration;
  public UserRepository() {}
  @Override
  public MongoCollection<UserEntity> getCollection() {
    CodecRegistry codecRegistry = configuration.registerCodecs();
    return mongoClient.getDatabase("AnimalAppli").getCollection("User", UserEntity.class).withCodecRegistry(codecRegistry);
  }
  @Override
  public UserEntity insert(UserEntity entity) {
    MongoCollection<Document> collection= mongoClient.getDatabase("AnimalAppli").getCollection("User");
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
  public UserEntity get(String id) {
    Document query = new Document("_id", new ObjectId(id));
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
  public void update(String id, UserEntity updatedUser) {
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
  public void delete(String id) {
      Document document = new Document("_id", new ObjectId(id));
      getCollection().deleteOne(document);
  }
}
