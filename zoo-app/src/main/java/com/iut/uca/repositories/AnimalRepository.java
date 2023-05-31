package com.iut.uca.repositories;

import com.iut.uca.configuration.Configuration;
import com.iut.uca.configuration.ConfigurationAnimal;
import com.iut.uca.enums.Diet;
import com.iut.uca.enums.GeoLocation;
import com.iut.uca.enums.Status;
import com.iut.uca.repositories.entity.AnimalEntity;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
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
  public List<AnimalEntity> getAnimalsByName(String name) {
    Document query = new Document(ConfigurationAnimal.NAME, getDocumentWithRegexInsensitive(name));
    return getAnimalListByQuery(query);
  }

  public List<AnimalEntity> getAnimalByType(String type) {
    Document query = new Document(ConfigurationAnimal.TYPE_ANIMAL, getDocumentWithRegexInsensitive(type));
    return getAnimalListByQuery(query);
  }

  protected Document getDocumentWithRegexInsensitive(String value) {
    return new Document(Configuration.$REGEX, Configuration.REGEX_OPERATOR
        + value + Configuration.REGEX_OPERATOR).append(Configuration.$OPTION, Configuration.REGEX_INSENSITIVE);
  }

  protected List<AnimalEntity> getAnimalListByQuery(Document query) {
    MongoCursor<Document> cursor = mongoClient.getDatabase(Configuration.DATABASE_NAME).getCollection(Configuration.ANIMAL_COLLECTION).find(
        query).iterator();

    List<AnimalEntity> animalEntities = new ArrayList<>();
    while (cursor.hasNext()) {
      Document animalDoc = cursor.next();
      AnimalEntity animalEntity = mapAnimalEntity(animalDoc);
      animalEntities.add(animalEntity);
    }
    return animalEntities;
  }

  protected AnimalEntity mapAnimalEntity(Document doc) {
    AnimalEntity animalEntity = new AnimalEntity();
    animalEntity.setId(doc.getObjectId(ConfigurationAnimal.ID));
    animalEntity.setName(doc.getString(ConfigurationAnimal.NAME));
    animalEntity.setTypeAnimal(doc.getString(ConfigurationAnimal.TYPE_ANIMAL));
    animalEntity.setGestation((doc.getInteger(ConfigurationAnimal.GESTATION)));
    animalEntity.setDiet(Diet.valueOf(doc.getString(ConfigurationAnimal.DIET)));
    animalEntity.setStatus(Status.valueOf(doc.getString(ConfigurationAnimal.STATUS)));
    animalEntity.setGeoLocation(GeoLocation.valueOf(doc.getString(ConfigurationAnimal.GEOLOCATION)));
    animalEntity.setLongevity((doc.getInteger(ConfigurationAnimal.LONGEVITY)));
    animalEntity.setImages(doc.getList(ConfigurationAnimal.IMAGES, String.class));
    animalEntity.setNbKid((doc.getInteger(ConfigurationAnimal.NB_KID)));
    return animalEntity;
  }


}
