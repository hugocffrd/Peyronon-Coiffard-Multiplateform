package com.iut.uca.mapper;

import com.iut.uca.api.dto.Animal;
import com.iut.uca.repositories.entity.AnimalEntity;
import jakarta.inject.Inject;
import jakarta.inject.Singleton;
import org.bson.types.ObjectId;

@Singleton
public class AnimalMapper implements IMapper<Animal, AnimalEntity> {
  @Inject
  DietMapper dietMapper;
  @Inject
  StatusMapper statusMapper;
  @Inject
  GeoLocationMapper geoLocationMapper;
  public Animal mapDto(AnimalEntity animalEntity) {
    Animal animal = newInstanceDto();
    animal.setId(animalEntity.getId().toHexString());
    animal.setName(animalEntity.getName());
    animal.setTypeAnimal(animalEntity.getTypeAnimal());
    animal.setDiet(dietMapper.map(animalEntity.getDiet()));
    animal.setGestation(animalEntity.getGestation());
    animal.setLongevity(animalEntity.getLongevity());
    animal.setImages(animalEntity.getImages());
    animal.setGeoLocation(geoLocationMapper.map(animalEntity.getGeoLocation()));
    animal.setStatus(statusMapper.map(animalEntity.getStatus()));
    return animal;
  }
  public AnimalEntity updateEntity(AnimalEntity animalEntity, Animal animal) {
    animalEntity.setId(new ObjectId(String.valueOf(animal.getId())));
    animalEntity.setName(animal.getName());
    animalEntity.setTypeAnimal(animal.getTypeAnimal());
    animalEntity.setLongevity(animal.getLongevity());
    animalEntity.setGeoLocation(geoLocationMapper.map(animal.getGeoLocation()));
    animalEntity.setDiet(dietMapper.map(animal.getDiet()));
    animalEntity.setStatus(statusMapper.map(animal.getStatus()));
    animalEntity.setGestation(animal.getGestation());
    animalEntity.setNbKid(animal.getNbKid());
    animalEntity.setImages(animal.getImages());
    return animalEntity;
  }

  public AnimalEntity mapEntity(Animal animal) {
    AnimalEntity entity = newInstanceEntity();
    entity.setName(animal.getName());
    entity.setTypeAnimal(animal.getTypeAnimal());
    entity.setLongevity(animal.getLongevity());
    entity.setGeoLocation(geoLocationMapper.map(animal.getGeoLocation()));
    entity.setGestation(animal.getGestation());
    entity.setDiet(dietMapper.map(animal.getDiet()));
    entity.setStatus(statusMapper.map(animal.getStatus()));
    animal.setNbKid(animal.getNbKid());
    animal.setImages(animal.getImages());
    return entity;
  }


  protected Animal newInstanceDto() {
    return new Animal();
  }

  protected AnimalEntity newInstanceEntity() {
    return new AnimalEntity();
  }


}
