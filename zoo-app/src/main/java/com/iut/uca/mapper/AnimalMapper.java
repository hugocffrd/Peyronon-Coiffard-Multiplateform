package com.iut.uca.mapper;

import com.iut.uca.api.dto.Animal;
import com.iut.uca.repositories.entity.AnimalEntity;

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

  public AnimalEntity mapEntity(Animal animal) {
    AnimalEntity entity = newEntityInstance();
    return entity;
  }

  protected Animal newDtoInstance() {
    return new Animal();
  }
  protected AnimalEntity newEntityInstance() {return new AnimalEntity();}
}
