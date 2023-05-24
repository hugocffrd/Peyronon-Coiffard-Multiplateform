package com.iut.uca.services;

import com.iut.uca.api.dto.Animal;
import com.iut.uca.enums.Diet;
import com.iut.uca.enums.GeoLocation;
import com.iut.uca.enums.Status;
import com.iut.uca.mapper.AnimalMapper;
import com.iut.uca.repositories.AnimalRepository;
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
    return new ArrayList<>();
  }

  public void addAnimal(Animal animal) {

  }

  public void updateAnimal(long id) {

  }

  public void deleteAnimal(long id) {
  animalRepository.delete(id);
  }
}
