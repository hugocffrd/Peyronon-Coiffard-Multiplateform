package com.iut.uca.repositories;

import com.iut.uca.configuration.Configuration;
import com.iut.uca.configuration.ConfigurationAnimal;
import com.iut.uca.enums.Diet;
import com.iut.uca.enums.GeoLocation;
import com.iut.uca.enums.Status;
import com.iut.uca.repositories.entity.AnimalEntity;
import com.mongodb.client.AggregateIterable;
import com.mongodb.client.ClientSession;
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
    final MongoCollection<Document> collection= mongoClient.getDatabase(Configuration.DATABASE_NAME).getCollection(Configuration.ANIMAL_COLLECTION);
    final ObjectId id = new ObjectId();
    entity.setId(id);
    final Document document = new Document(ConfigurationAnimal.ID, entity.getId())
        .append(ConfigurationAnimal.NAME, entity.getName())
        .append(ConfigurationAnimal.TYPE_ANIMAL, entity.getTypeAnimal())
        .append(ConfigurationAnimal.LONGEVITY, entity.getLongevity())
        .append(ConfigurationAnimal.GEOLOCATION, entity.getGeoLocation())
        .append(ConfigurationAnimal.DIET, entity.getDiet())
        .append(ConfigurationAnimal.STATUS, entity.getStatus())
        .append(ConfigurationAnimal.GESTATION, entity.getGestation())
        .append(ConfigurationAnimal.NB_KID, entity.getNbKid())
        .append(ConfigurationAnimal.IMAGES, entity.getImages());
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
  public AnimalEntity get(String id) {
    final Document query = new Document(ConfigurationAnimal.ID, new ObjectId(id));
    return getCollection().find(query).first();
  }

  @Override
  public List<AnimalEntity> list() {
    final  FindIterable<AnimalEntity> results = getCollection().find();
    final List<AnimalEntity> animalEntityList = new ArrayList<>();
    for (AnimalEntity animalEntity : results) {
      animalEntityList.add(animalEntity);
    }
    return animalEntityList;
  }

  @Override
  public AnimalEntity update(String id, AnimalEntity updatedAnimal) {

    final Document query = new Document(ConfigurationAnimal.ID, new ObjectId(String.valueOf(id)));
    final Document updatedDocument = new Document(Configuration.$SET, new Document()
        .append(ConfigurationAnimal.NAME, updatedAnimal.getName())
        .append(ConfigurationAnimal.TYPE_ANIMAL, updatedAnimal.getTypeAnimal())
        .append(ConfigurationAnimal.LONGEVITY, updatedAnimal.getLongevity())
        .append(ConfigurationAnimal.GESTATION, updatedAnimal.getGestation())
        .append(ConfigurationAnimal.STATUS, updatedAnimal.getStatus())
        .append(ConfigurationAnimal.NB_KID, updatedAnimal.getNbKid())
        .append(ConfigurationAnimal.IMAGES, updatedAnimal.getImages()));
    getCollection().updateOne(query, updatedDocument);

    return getCollection().find(query).first();
  }

  @Override
  public void delete(String id) {
      Document document = new Document(ConfigurationAnimal.ID, new ObjectId(id));
      getCollection().deleteOne(document);
  }
  public List<AnimalEntity> getAnimalsByName(String name) {
    final Document regexQuery = new Document(Configuration.$REGEX, name).append(Configuration.$OPTION, Configuration.REGEX_INSENSITIVE);
    final Document matchStage = new Document(Configuration.$MATCH, new Document(ConfigurationAnimal.NAME, regexQuery));
    final Document groupStage = new Document(Configuration.$GROUP, new Document(ConfigurationAnimal.ID, null).append(Configuration.ANIMALS, new Document(Configuration.$PUSH, Configuration.$$ROOT)));
    final Document projectStage = new Document(Configuration.$PROJECT, new Document(ConfigurationAnimal.ID, 0).append(Configuration.ANIMALS, 1));

    final AggregateIterable<Document> results = mongoClient.getDatabase(Configuration.DATABASE_NAME).getCollection(Configuration.ANIMAL_COLLECTION).aggregate(List.of(matchStage, groupStage, projectStage));

    final List<AnimalEntity> animalEntities = new ArrayList<>();

    for (Document result : results) {
      List<Document> animalDocs = result.getList(Configuration.ANIMALS, Document.class);
      for (Document animalDoc : animalDocs) {
        animalEntities.add(mapAnimalEntity(animalDoc));
      }
    }

    return animalEntities;
  }

  public List<AnimalEntity> getAnimalByType(String type) {
    final Document query = new Document(ConfigurationAnimal.TYPE_ANIMAL, getDocumentWithRegexInsensitive(type));
    return getAnimalListByQuery(query);
  }

  protected Document getDocumentWithRegexInsensitive(String value) {
    return new Document(Configuration.$REGEX, Configuration.REGEX_OPERATOR
        + value + Configuration.REGEX_OPERATOR).append(Configuration.$OPTION, Configuration.REGEX_INSENSITIVE);
  }

  protected List<AnimalEntity> getAnimalListByQuery(Document query) {
   final MongoCursor<Document> cursor = mongoClient.getDatabase(Configuration.DATABASE_NAME).getCollection(Configuration.ANIMAL_COLLECTION).find(
        query).iterator();

    List<AnimalEntity> animalEntities = new ArrayList<>();
    while (cursor.hasNext()) {
      Document animalDoc = cursor.next();
      animalEntities.add(mapAnimalEntity(animalDoc));
    }
    return animalEntities;
  }

  protected AnimalEntity mapAnimalEntity(Document doc) {
    final AnimalEntity animalEntity = new AnimalEntity();
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
