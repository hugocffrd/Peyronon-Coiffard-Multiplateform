package com.iut.uca.mapper;

import com.iut.uca.api.dto.Animal;
import com.iut.uca.repositories.entity.AnimalEntity;
import jakarta.inject.Singleton;

@Singleton
public class AnimalMapper implements IMapper<Animal, AnimalEntity> {

  public Animal mapDto(AnimalEntity animalEntity) {
    Animal animal = newDtoInstance();
    animal.setId(animalEntity.getId());
    animal.setName(animalEntity.getName());
    animal.setTypeAnimal(animalEntity.getTypeAnimal());
    animal.setDiet(animalEntity.getDiet());
    animal.setGestation(animalEntity.getGestation());
    animal.setLongevity(animalEntity.getLongevity());
    animal.setImages(animalEntity.getImages());
    animal.setStatus(animal.getStatus());
    return animal;
  }
  public AnimalEntity updateEntity(AnimalEntity animalEntity, Animal animal) {
    animalEntity.setId(animal.getId());
    animalEntity.setName(animal.getName());
    animalEntity.setTypeAnimal(animal.getTypeAnimal());
    animalEntity.setLongevity(animal.getLongevity());
    animalEntity.setGeoLocation(animal.getGeoLocation());
    animalEntity.setDiet(animal.getDiet());
    animalEntity.setStatus(animal.getStatus());
    animalEntity.setGestation(animal.getGestation());
    animalEntity.setNbKid(animal.getNbKid());
    animalEntity.setImages(animal.getImages());
    return animalEntity;
  }

  public AnimalEntity mapEntity(Animal animal) {
    AnimalEntity entity = newEntityInstance();
    entity.setName(animal.getName());
    entity.setTypeAnimal(animal.getTypeAnimal());
    entity.setLongevity(animal.getLongevity());
    entity.setGeoLocation(animal.getGeoLocation());
    entity.setGestation(animal.getGestation());
    entity.setDiet(animal.getDiet());
    entity.setStatus(animal.getStatus());
    animal.setNbKid(animal.getNbKid());
    animal.setImages(animal.getImages());
    return entity;
  }

  protected Animal newDtoInstance() {
    return new Animal();
  }
  protected AnimalEntity newEntityInstance() {return new AnimalEntity();}
}
