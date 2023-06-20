package com.iut.uca.api.dto.param;

import java.util.List;
import java.util.Objects;

/**
 * Animal values which could be got by front
 */
public class AnimalParam {

  private String id;
  private String name;
  private String typeAnimal;
  private int longevity;
  private String diet;
  private String status;
  private int gestation;
  private int nbKid;
  private String geoLocation;
  private List<String> images;

  public AnimalParam() {}
  public AnimalParam(String id, String name, String typeAnimal, int longevity, String diet,
      String status, int gestation, int nbKid, String geoLocation, List<String> images) {
    this.id = id;
    this.name = name;
    this.typeAnimal = typeAnimal;
    this.longevity = longevity;
    this.diet = diet;
    this.status = status;
    this.gestation = gestation;
    this.nbKid = nbKid;
    this.geoLocation = geoLocation;
    this.images = images;
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
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

  public String getDiet() {
    return diet;
  }

  public void setDiet(String diet) {
    this.diet = diet;
  }

  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
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

  public String getGeoLocation() {
    return geoLocation;
  }

  public void setGeoLocation(String geoLocation) {
    this.geoLocation = geoLocation;
  }

  public List<String> getImages() {
    return images;
  }

  public void setImages(List<String> images) {
    this.images = images;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AnimalParam that = (AnimalParam) o;
    return longevity == that.longevity && gestation == that.gestation && nbKid == that.nbKid
        && Objects.equals(id, that.id) && Objects.equals(name, that.name)
        && Objects.equals(typeAnimal, that.typeAnimal) && Objects.equals(diet,
        that.diet) && Objects.equals(status, that.status) && Objects.equals(
        geoLocation, that.geoLocation) && Objects.equals(images, that.images);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, name, typeAnimal, longevity, diet, status, gestation, nbKid, geoLocation,
        images);
  }

  @Override
  public String toString() {
    return "AnimalParam{" +
        "id='" + id + '\'' +
        ", name='" + name + '\'' +
        ", typeAnimal='" + typeAnimal + '\'' +
        ", longevity=" + longevity +
        ", diet='" + diet + '\'' +
        ", status='" + status + '\'' +
        ", gestation=" + gestation +
        ", nbKid=" + nbKid +
        ", geoLocation='" + geoLocation + '\'' +
        ", images=" + images +
        '}';
  }
}
