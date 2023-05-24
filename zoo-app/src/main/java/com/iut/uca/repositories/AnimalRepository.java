package com.iut.uca.repositories;

import com.iut.uca.repositories.entity.AnimalEntity;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import jakarta.inject.Inject;
import java.util.ArrayList;
import java.util.List;
import org.bson.Document;
import org.bson.types.ObjectId;

public class AnimalRepository implements IRepository<AnimalEntity> {

  @Inject
  MongoDatabase mongoDatabase;
  @Override
  public MongoCollection<AnimalEntity> getCollection() {
    return mongoDatabase.getCollection("animal", AnimalEntity.class);
  }
  @Override
  public AnimalEntity insert(AnimalEntity entity) {
    MongoCollection<Document> collection= mongoDatabase.getCollection("animal");
    ObjectId id = new ObjectId();
    entity.setId(id);
    Document document = new Document("_id", entity.getId())
        .append("name", entity.getName())
        .append("surname", entity.getTypeAnimal())
        .append("email", entity.getLongevity())
        .append("password", entity.getGeoLocation())
        .append("diet", entity.getDiet())
        .append("status", entity.getStatus())
        .append("gestation", entity.getGestation())
        .append("nbKit", entity.getNbKid())
        .append("images", entity.getImages());
    collection.insertOne(document);
    return entity;
  }

  @Override
  public AnimalEntity get(long id) {
    Document query = new Document("_id", new ObjectId(String.valueOf(id)));
    return getCollection().find(query).first();
  }

  @Override
  public List<AnimalEntity> list() {
    FindIterable<AnimalEntity> results = getCollection().find();
    List<AnimalEntity> userList = new ArrayList<>();
    for (AnimalEntity userEntity : results) {
      userList.add(userEntity);
    }
    return userList;
  }

  @Override
  public void update(long id, AnimalEntity entity) {

  }

  @Override
  public void delete(long id) {
    getCollection().deleteOne(new Document("_id", id));
  }
}
