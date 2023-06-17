package com.iut.uca.repositories;

import com.iut.uca.configuration.Configuration;
import com.iut.uca.configuration.ConfigurationCagnote;
import com.iut.uca.configuration.ConfigurationUser;
import com.iut.uca.repositories.entity.AnimalId;
import com.iut.uca.repositories.entity.CagnoteEntity;
import com.iut.uca.repositories.entity.UserId;
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
public class CagnoteRepository implements IRepository<CagnoteEntity> {
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
    Document document = new Document(ConfigurationCagnote.ID, entity.getId())
        .append(ConfigurationCagnote.AMOUNT, entity.getAmount())
        .append(ConfigurationCagnote.ANIMAL_ID, entity.getAnimalId())
        .append(ConfigurationCagnote.USER_IDS, entity.getUserIds());

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
    return entity;
  }
  @Override
  public CagnoteEntity get(String id) {
    getCollection().createIndex(Indexes.ascending(ConfigurationCagnote.USER_IDS));
    Document query = new Document(ConfigurationCagnote.ID, new ObjectId(id));
    return getCollection().find(query).first();  }

  @Override
  public List<CagnoteEntity> list() {
    getCollection().createIndex(Indexes.ascending(ConfigurationCagnote.USER_IDS));
    FindIterable<CagnoteEntity> results = getCollection().find();
    List<CagnoteEntity> cagnoteEntityList = new ArrayList<>();
    for (CagnoteEntity cagnoteEntity : results) {
      cagnoteEntityList.add(cagnoteEntity);
    }
    return cagnoteEntityList;
  }

  @Override
  public CagnoteEntity update(String id, CagnoteEntity updatedCagnote) {
    Document query = new Document(ConfigurationCagnote.ID, new ObjectId(String.valueOf(id)));
    Document updatedDocument = new Document(Configuration.$SET, new Document()
        .append(ConfigurationCagnote.ANIMAL_ID, updatedCagnote.getAnimalId())
        .append(ConfigurationCagnote.USER_IDS, updatedCagnote.getUserIds())
        .append(ConfigurationCagnote.AMOUNT, updatedCagnote.getAmount()));
    getCollection().updateOne(query, updatedDocument);
    return getCollection().find(query).first();
  }

  @Override
  public void delete(String id) {
    Document document = new Document(ConfigurationCagnote.ID, new ObjectId(id));
    getCollection().deleteOne(document);
  }

  public CagnoteEntity getCagnoteByAnimalId(String id) {
    Document filter = new Document(ConfigurationCagnote.ANIMAL_ID +"._id", new ObjectId(id));
    return getCollection().find(filter).first();
  }
}
