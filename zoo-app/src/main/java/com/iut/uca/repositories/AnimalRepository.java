package com.iut.uca.repositories;

import com.iut.uca.repositories.entity.AnimalEntity;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import io.quarkus.mongodb.MongoClientName;
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

  public AnimalRepository( ) {
  }
  @Override
  public MongoCollection<AnimalEntity> getCollection() {
    return mongoClient.getDatabase("AnimalAppli").getCollection("Animal", AnimalEntity.class);
  }
  @Override
  public AnimalEntity insert(AnimalEntity entity) {
    MongoCollection<Document> collection= mongoClient.getDatabase("AnimalAppli").getCollection("Animal");
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
  public void update(long id, AnimalEntity updatedAnimal) {
    Document query = new Document("_id", new ObjectId(String.valueOf(id)));
    Document updatedDocument = new Document("$set", new Document()
        .append("name", updatedAnimal.getName())
        .append("typeAnimal", updatedAnimal.getTypeAnimal())
        .append("longevity", updatedAnimal.getLongevity())
        .append("gestation", updatedAnimal.getGestation())
        .append("status", updatedAnimal.getStatus())
        .append("nbKid", updatedAnimal.getNbKid())
        .append("images", updatedAnimal.getImages()));
    getCollection().updateOne(query, updatedDocument);
  }

  @Override
  public void delete(long id) {
    getCollection().deleteOne(new Document("_id", id));
  }
}
