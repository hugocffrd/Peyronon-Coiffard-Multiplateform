package com.iut.uca.repositories.entity;

import com.iut.uca.enums.Diet;
import com.iut.uca.enums.GeoLocation;
import com.iut.uca.enums.Status;
import java.util.List;
import org.bson.codecs.pojo.annotations.BsonId;
import org.bson.types.ObjectId;
public class AnimalEntity  {

  @BsonId
  private ObjectId _id;
  private String name;
  private String typeAnimal;
  private int longevity;
  private Diet diet;
  private Status status;
  private GeoLocation geoLocation;
  private int gestation;
  private int nbKid;
  private List<String> images;

  public AnimalEntity() {}

  public ObjectId getId() {
    return _id;
  }

  public void setId(ObjectId id) {
    this._id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getTypeAnimal() {
    return typeAnimal;
  }

  public void setTypeAnimal(String typeAnimal) {
    this.typeAnimal = typeAnimal;
  }

  public int getLongevity() {
    return longevity;
  }

  public void setLongevity(int longevity) {
    this.longevity = longevity;
  }

  public Diet getDiet() {
    return diet;
  }

  public void setDiet(Diet diet) {
    this.diet = diet;
  }

  public Status getStatus() {
    return status;
  }

  public void setStatus(Status status) {
    this.status = status;
  }

  public GeoLocation getGeoLocation() {
    return geoLocation;
  }

  public void setGeoLocation(GeoLocation geoLocation) {
    this.geoLocation = geoLocation;
  }

  public int getGestation() {
    return gestation;
  }

  public void setGestation(int gestation) {
    this.gestation = gestation;
  }

  public int getNbKid() {
    return nbKid;
  }

  public void setNbKid(int nbKid) {
    this.nbKid = nbKid;
  }

  public List<String> getImages() {
    return images;
  }

  public void setImages(List<String> images) {
    this.images = images;
  }
}
