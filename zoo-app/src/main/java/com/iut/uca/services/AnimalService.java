package com.iut.uca.services;

import com.iut.uca.api.dto.Animal;
import com.iut.uca.enums.Diet;
import com.iut.uca.enums.GeoLocation;
import com.iut.uca.enums.Status;
import com.iut.uca.mapper.AnimalMapper;
import com.iut.uca.mapper.DietMapper;
import com.iut.uca.mapper.GeoLocationMapper;
import com.iut.uca.mapper.StatusMapper;
import com.iut.uca.repositories.AnimalRepository;
import com.iut.uca.repositories.entity.AnimalEntity;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import java.util.ArrayList;
import java.util.List;

@ApplicationScoped
public class AnimalService {

  @Inject
  AnimalRepository animalRepository;

  @Inject
  AnimalMapper animalMapper;

  @Inject
  DietMapper dietMapper;

  @Inject
  StatusMapper statusMapper;

  @Inject
  GeoLocationMapper geoLocationMapper;

  public Animal getOneAnimal(String id) {
    return animalMapper.mapDto(animalRepository.get(id)) ;
  }

  public List<Animal> getAllAnimals() {
    List<AnimalEntity> animalEntities = animalRepository.list();
    return mapAnimals(animalEntities);
  }

  public void addAnimal(
       String id,
       String name,
       String typeAnimal,
       int longevity,
       String diet,
       String status,
       int gestation,
       int nbKid,
       String geoLocation,
       List<String> images
  ) {
    Animal animal = createAnimal(id, name, typeAnimal, longevity, diet, status,
        gestation, nbKid, geoLocation, images);
    animalRepository.insert(animalMapper.mapEntity(animal));
  }

  public void updateAnimal( String id,
      String name,
      String typeAnimal,
      int longevity,
      String diet,
      String status,
      int gestation,
      int nbKid,
      String geoLocation,
      List<String> images) {
    Animal newAnimal = createAnimal(id, name, typeAnimal, longevity, diet, status,
        gestation, nbKid, geoLocation, images);

    AnimalEntity animalEntity = animalRepository.get(id);
    AnimalEntity updateAnimal = animalMapper.updateEntity(animalEntity, newAnimal);
    animalRepository.update(id,updateAnimal);

  }

  protected Animal createAnimal(String id, String name, String typeAnimal, int longevity, String diet,
      String status, int gestation, int nbKid, String geoLocation, List<String> images) {
    Diet animalDiet = dietMapper.mapByString(diet);
    Status animalStatus = statusMapper.mapByString(status);
    GeoLocation animalGeoLocation = geoLocationMapper.mapByString(geoLocation);
    return new Animal(id, name, typeAnimal, longevity, animalGeoLocation, animalDiet, animalStatus,
        gestation, nbKid, images);
  }

  public void deleteAnimal(String id) {
    animalRepository.delete(id);
  }

  public List<Animal> getAnimalsByName(String name) {
    return mapAnimals(animalRepository.getAnimalsByName(name));
  }

  public List<Animal> getAnimalByType(String type) {
    return mapAnimals(animalRepository.getAnimalByType(type));
  }

  protected List<Animal> mapAnimals(List<AnimalEntity> animalEntityList) {
    List<Animal> animalList = new ArrayList<>();
    for (AnimalEntity animalEntity : animalEntityList) {
      animalList.add(animalMapper.mapDto(animalEntity));
    }
    return animalList;
  }
}
