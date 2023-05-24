package com.iut.uca.services;

import com.iut.uca.models.Animal;
import com.iut.uca.models.enums.Diet;
import com.iut.uca.models.enums.GeoLocation;
import com.iut.uca.models.enums.Status;
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
