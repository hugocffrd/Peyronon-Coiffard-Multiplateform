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

  /**
   * Injection of the mappers
   */
  @Inject
  AnimalMapper animalMapper;

  @Inject
  DietMapper dietMapper;

  @Inject
  StatusMapper statusMapper;

  @Inject
  GeoLocationMapper geoLocationMapper;

  /**
   * Injection of the repositories
   */
  @Inject
  AnimalRepository animalRepository;


  /**
   * Get one animal
   * @param id of the animal
   * @return the animal wanted
   */
  public Animal getOneAnimal(String id) {
    return animalMapper.mapDto(animalRepository.get(id)) ;
  }

  /**
   * Get all animals
   * @return list of animals from database
   */
  public List<Animal> getAllAnimals() {
    List<AnimalEntity> animalEntities = animalRepository.list();
    return mapAnimals(animalEntities);
  }

  /**
   * Add animal to database
   * @param id of animal
   * @param name of animal
   * @param typeAnimal of animal
   * @param longevity of animal
   * @param diet of animal
   * @param status of animal
   * @param gestation of animal
   * @param nbKid of animal
   * @param geoLocation of animal
   * @param images of animal
   * @return Animal added
   */
  public Animal addAnimal(
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
    AnimalEntity animalEntity = animalRepository.insert(animalMapper.mapEntity(animal));
    return animalMapper.mapDto(animalEntity);
  }

  /**
   * Update animal
   * @param id of the animal to update
   * @param name updated
   * @param typeAnimal updated
   * @param longevity updated
   * @param diet updated
   * @param status updated
   * @param gestation updated
   * @param nbKid updated
   * @param geoLocation updated
   * @param images updated
   * @return animal updated
   */
  public Animal updateAnimal( String id,
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
    AnimalEntity animalEntityUpdated = animalRepository.update(id,updateAnimal);
    return animalMapper.mapDto(animalEntityUpdated);

  }

  /**
   * Delete animal
   * @param id of animal to delete
   */
  public void deleteAnimal(String id) {
    animalRepository.delete(id);
  }

  /**
   * Get animals by search on name
   * @param name search value
   * @return list of animals corresponding to the search
   */
  public List<Animal> getAnimalsByName(String name) {
    return mapAnimals(animalRepository.getAnimalsByName(name));
  }

  /**
   * Get animals by search on type
   * @param type search value
   * @return list of animals corresponding to the search
   */
  public List<Animal> getAnimalByType(String type) {
    return mapAnimals(animalRepository.getAnimalByType(type));
  }

  protected Animal createAnimal(String id, String name, String typeAnimal, int longevity, String diet,
      String status, int gestation, int nbKid, String geoLocation, List<String> images) {
    Diet animalDiet = dietMapper.mapByString(diet);
    Status animalStatus = statusMapper.mapByString(status);
    GeoLocation animalGeoLocation = geoLocationMapper.mapByString(geoLocation);
    return new Animal(id, name, typeAnimal, longevity, animalGeoLocation, animalDiet, animalStatus,
        gestation, nbKid, images);
  }

  protected List<Animal> mapAnimals(List<AnimalEntity> animalEntityList) {
    List<Animal> animalList = new ArrayList<>();
    for (AnimalEntity animalEntity : animalEntityList) {
      animalList.add(animalMapper.mapDto(animalEntity));
    }
    return animalList;
  }
}
