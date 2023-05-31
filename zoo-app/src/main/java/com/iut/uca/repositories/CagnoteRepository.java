package com.iut.uca.repositories;

import com.iut.uca.configuration.Configuration;
import com.iut.uca.repositories.entity.CagnoteEntity;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import jakarta.inject.Inject;
import jakarta.inject.Singleton;
import java.util.ArrayList;
import java.util.List;
import org.bson.Document;
import org.bson.types.ObjectId;

@Singleton
public class CagnoteRepository implements IRepository<CagnoteEntity> {

  @Inject
  Configuration configuration;

  @Inject
  MongoClient mongoClient;


  @Override
  public MongoCollection<CagnoteEntity> getCollection() {
    return mongoClient.getDatabase(Configuration.DATABASE_NAME).getCollection(Configuration.CAGNOTE_COLLECTION, CagnoteEntity.class);
  }

  @Override
  public CagnoteEntity insert(CagnoteEntity entity) {
    MongoCollection<Document> collection= mongoClient.getDatabase(Configuration.DATABASE_NAME).getCollection(Configuration.CAGNOTE_COLLECTION);
    ObjectId id = new ObjectId();
    entity.setId(id);
    Document document = new Document("_id", entity.getId())
        .append("amount", entity.getAmount())
        .append("animalId", entity.getAnimalId())
        .append("userIds", entity.getUserIds());
    collection.insertOne(document);
    return entity;
  }

  @Override
  public CagnoteEntity get(String id) {
    Document query = new Document("_id", new ObjectId(id));
    return getCollection().find(query).first();  }

  @Override
  public List<CagnoteEntity> list() {
    FindIterable<CagnoteEntity> results = getCollection().find();
    List<CagnoteEntity> cagnoteEntityList = new ArrayList<>();
    for (CagnoteEntity cagnoteEntity : results) {
      cagnoteEntityList.add(cagnoteEntity);
    }
    return cagnoteEntityList;
  }

  @Override
  public void update(String id, CagnoteEntity updatedCagnote) {
    Document query = new Document("_id", new ObjectId(String.valueOf(id)));
    Document updatedDocument = new Document("$set", new Document()
        .append("animalId", updatedCagnote.getAnimalId())
        .append("userIds", updatedCagnote.getUserIds())
        .append("amount", updatedCagnote.getAmount()));
    getCollection().updateOne(query, updatedDocument);
  }

  @Override
  public void delete(String id) {
    Document document = new Document("_id", new ObjectId(id));
    getCollection().deleteOne(document);
  }
}
