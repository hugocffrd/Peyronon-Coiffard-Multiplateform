package com.iut.uca.repositories;

import com.iut.uca.configuration.Configuration;
import com.iut.uca.configuration.ConfigurationAnimal;
import com.iut.uca.repositories.entity.AnimalEntity;
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
public class AnimalRepository implements IRepository<AnimalEntity> {
  @Inject
  MongoClient mongoClient;

  public AnimalRepository() {}
  @Override
  public MongoCollection<AnimalEntity> getCollection() {
    return mongoClient.getDatabase(Configuration.DATABASE_NAME).getCollection(Configuration.ANIMAL_COLLECTION, AnimalEntity.class);
  }
  @Override
  public AnimalEntity insert(AnimalEntity entity) {
    MongoCollection<Document> collection= mongoClient.getDatabase(Configuration.DATABASE_NAME).getCollection(Configuration.ANIMAL_COLLECTION);
    ObjectId id = new ObjectId();
    entity.setId(id);
    Document document = new Document(ConfigurationAnimal.ID, entity.getId())
        .append(ConfigurationAnimal.NAME, entity.getName())
        .append(ConfigurationAnimal.TYPE_ANIMAL, entity.getTypeAnimal())
        .append(ConfigurationAnimal.LONGEVITY, entity.getLongevity())
        .append(ConfigurationAnimal.GEOLOCATION, entity.getGeoLocation())
        .append(ConfigurationAnimal.DIET, entity.getDiet())
        .append(ConfigurationAnimal.STATUS, entity.getStatus())
        .append(ConfigurationAnimal.GESTATION, entity.getGestation())
        .append(ConfigurationAnimal.NB_KID, entity.getNbKid())
        .append(ConfigurationAnimal.IMAGES, entity.getImages());
    collection.insertOne(document);
    return entity;
  }

  @Override
  public AnimalEntity get(String id) {
    Document query = new Document(ConfigurationAnimal.ID, new ObjectId(id));
    return getCollection().find(query).first();
  }

  @Override
  public List<AnimalEntity> list() {
    FindIterable<AnimalEntity> results = getCollection().find();
    List<AnimalEntity> animalEntityList = new ArrayList<>();
    for (AnimalEntity animalEntity : results) {
      animalEntityList.add(animalEntity);
    }
    return animalEntityList;
  }

  @Override
  public void update(String id, AnimalEntity updatedAnimal) {
    Document query = new Document(ConfigurationAnimal.ID, new ObjectId(String.valueOf(id)));
    Document updatedDocument = new Document(Configuration.$SET, new Document()
        .append(ConfigurationAnimal.NAME, updatedAnimal.getName())
        .append(ConfigurationAnimal.TYPE_ANIMAL, updatedAnimal.getTypeAnimal())
        .append(ConfigurationAnimal.LONGEVITY, updatedAnimal.getLongevity())
        .append(ConfigurationAnimal.GESTATION, updatedAnimal.getGestation())
        .append(ConfigurationAnimal.STATUS, updatedAnimal.getStatus())
        .append(ConfigurationAnimal.NB_KID, updatedAnimal.getNbKid())
        .append(ConfigurationAnimal.IMAGES, updatedAnimal.getImages()));
    getCollection().updateOne(query, updatedDocument);
  }

  @Override
  public void delete(String id) {
      Document document = new Document(ConfigurationAnimal.ID, new ObjectId(id));
      getCollection().deleteOne(document);
  }
}
