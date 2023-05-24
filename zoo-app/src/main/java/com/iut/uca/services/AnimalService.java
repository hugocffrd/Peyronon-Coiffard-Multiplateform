package com.iut.uca.services;

import com.iut.uca.api.dto.Animal;
import com.iut.uca.mapper.AnimalMapper;
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

  public Animal getOneAnimal(long id) {
    return animalMapper.mapDto(animalRepository.get(id)) ;
  }

  public List<Animal> getAllAnimals() {
    List<AnimalEntity> animalEntities = animalRepository.list();
    List<Animal> animalList = new ArrayList<>();
    for (AnimalEntity animalEntity : animalEntities) {
      animalList.add(animalMapper.mapDto(animalEntity));
    }
    return animalList;
  }

  public void addAnimal(Animal animal) {
    animalRepository.insert(animalMapper.mapEntity(animal));
  }

  public void updateAnimal(long id) {

  }

  public void deleteAnimal(long id) {
  animalRepository.delete(id);
  }
}
