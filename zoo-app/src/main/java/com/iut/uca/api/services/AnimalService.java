package com.iut.uca.api.services;

import com.iut.uca.api.dto.Animal;
import com.iut.uca.enums.Diet;
import com.iut.uca.enums.GeoLocation;
import com.iut.uca.enums.Status;
import jakarta.enterprise.context.ApplicationScoped;
import java.util.ArrayList;
import java.util.List;

@ApplicationScoped
public class AnimalService {

  public Animal getOneAnimal(long id) {

    return new Animal(id, "Jean", "Elephant", 10, GeoLocation.AFRICA,   Diet.CARNIVORE, Status.ETEINT, 10, 15, new ArrayList<>());
  }

  public List<Animal> getAllAnimals() {
    return new ArrayList<>();
  }

  public void addAnimal(Animal animal) {

  }

  public void updateAnimal(long id) {

  }

  public void deleteAnimal(long id) {

  }
}
