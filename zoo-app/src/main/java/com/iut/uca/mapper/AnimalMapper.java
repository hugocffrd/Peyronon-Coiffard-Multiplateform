package com.iut.uca.mapper;

import com.iut.uca.api.dto.Animal;
import com.iut.uca.repositories.entity.AnimalEntity;

public class AnimalMapper {

  public Animal map(AnimalEntity animalEntity) {
    Animal animal = newInstance();
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

  protected Animal newInstance() {
    return new Animal();
  }
}
