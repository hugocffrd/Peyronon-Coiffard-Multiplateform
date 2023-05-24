package com.iut.uca.models;

import com.iut.uca.models.enums.Diet;
import com.iut.uca.models.enums.GeoLocation;
import com.iut.uca.models.enums.Status;
import java.util.ArrayList;
import java.util.List;

public class Animal {
  private long id;
  private String name;
  private String typeAnimal;
  private int longevity;
  private GeoLocation geoLocation;
  private Diet diet;
  private Status status;
  private int gestation;
  private int nbKid;
  private List<String> images;

  public Animal(long id, String name, String typeAnimal, int longevity, GeoLocation geoLocation,
      Diet diet, Status status, int gestation, int nbKid, List<String> images) {
    this.id = id;
    this.name = name;
    this.typeAnimal = typeAnimal;
    this.longevity = longevity;
    this.geoLocation = geoLocation;
    this.diet = diet;
    this.status = status;
    this.gestation = gestation;
    this.nbKid = nbKid;
    this.images = images.isEmpty() ? new ArrayList<>(): images;
  }


  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
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

  public GeoLocation getGeoLocation() {
    return geoLocation;
  }

  public void setGeoLocation(GeoLocation geoLocation) {
    this.geoLocation = geoLocation;
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

  public void addImageToList(String image) {
    this.images.add(image);
  }
}
