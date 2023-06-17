package com.iut.uca.repositories;

import static com.mongodb.client.model.Filters.in;

import com.iut.uca.configuration.Configuration;
import com.iut.uca.configuration.ConfigurationUser;
import com.iut.uca.repositories.entity.UserEntity;
import com.mongodb.client.ClientSession;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.model.Filters;
import com.mongodb.client.model.Indexes;
import jakarta.inject.Inject;
import jakarta.inject.Singleton;
import java.util.ArrayList;
import java.util.List;
import org.bson.Document;
import org.bson.types.ObjectId;
@Singleton
public class UserRepository implements IRepository<UserEntity>{
  @Inject
  MongoClient mongoClient;
  @Override
  public MongoCollection<UserEntity> getCollection() {
    return mongoClient.getDatabase(Configuration.DATABASE_NAME).getCollection(Configuration.USER_COLLECTION, UserEntity.class);
  }
  @Override
  public UserEntity insert(UserEntity entity) {
    MongoCollection<Document> collection= mongoClient.getDatabase(Configuration.DATABASE_NAME).getCollection(Configuration.USER_COLLECTION);
    ObjectId id = new ObjectId();
    entity.setId(id);
    Document document = new Document(Configuration.$SET, entity.getId())
        .append(ConfigurationUser.NAME, entity.getName())
        .append(ConfigurationUser.SURNAME, entity.getSurname())
        .append(ConfigurationUser.EMAIL, entity.getEmail())
        .append(ConfigurationUser.PASSWORD, entity.getPassword())
        .append(ConfigurationUser.ANIMALIDS, entity.getAnimalIds());
    ClientSession session = mongoClient.startSession();
    try {
      session.startTransaction();
      collection.insertOne(session, document);
      session.commitTransaction();
    } catch (Exception e) {
      session.abortTransaction();
      throw e;
    } finally {
      session.close();
    }

    collection.insertOne(document);
    return entity;
  }

  @Override
  public UserEntity get(String id) {
    Document query = new Document(ConfigurationUser.ID, new ObjectId(id));
    return getCollection().find(query).first();
  }

  @Override
  public List<UserEntity> list() {
    getCollection().createIndex(Indexes.ascending(ConfigurationUser.ANIMALIDS));
    FindIterable<UserEntity> results = getCollection().find();
    List<UserEntity> userList = new ArrayList<>();
    for (UserEntity userEntity : results) {
      userList.add(userEntity);
    }
    return userList;
  }

  @Override
  public UserEntity update(String id, UserEntity updatedUser) {
    Document query = new Document(ConfigurationUser.ID, new ObjectId(String.valueOf(id)));
    Document updatedDocument = new Document(Configuration.$SET, new Document()
        .append(ConfigurationUser.NAME, updatedUser.getName())
        .append(ConfigurationUser.SURNAME, updatedUser.getSurname())
        .append(ConfigurationUser.EMAIL, updatedUser.getEmail())
        .append(ConfigurationUser.PASSWORD, updatedUser.getPassword())
        .append(ConfigurationUser.ANIMALIDS, updatedUser.getAnimalIds()));
    getCollection().updateOne(query, updatedDocument);

    return getCollection().find(query).first();


  }
  @Override
  public void delete(String id) {
      Document document = new Document(ConfigurationUser.ID, new ObjectId(id));
      getCollection().deleteOne(document);
  }
  public List<UserEntity> getByIds(List<String> ids) {
    List<ObjectId> objectIds = new ArrayList<>();
    for (String id : ids) {
        objectIds.add(new ObjectId(id));
    }
    FindIterable<UserEntity> results = getCollection().find(in(ConfigurationUser.ID, objectIds));
    List<UserEntity> userList = new ArrayList<>();
    for (UserEntity userEntity : results) {
      userList.add(userEntity);
    }
    return userList;
  }

  public UserEntity getUserByEmailAndPassword(String email, String password) {
    return getCollection().find(Filters.and(
        Filters.eq(ConfigurationUser.EMAIL, email),
        Filters.eq(ConfigurationUser.PASSWORD, password)
    )).first();
  }
}
