package com.iut.uca.animal;

import com.iut.uca.ICrudTest;
import com.iut.uca.api.dto.Animal;
import com.iut.uca.enums.Diet;
import com.iut.uca.enums.GeoLocation;
import com.iut.uca.enums.Status;
import com.iut.uca.mapper.AnimalMapper;
import com.iut.uca.services.AnimalService;
import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class AnimalCrudTest implements ICrudTest {

  AnimalMapper animalMapper;
  AnimalService animalService;

  String id;
  @Override
  @BeforeEach
  public void setup() {
    animalMapper = Mockito.mock(AnimalMapper.class);
    animalService = Mockito.mock(AnimalService.class);
    id= "6470801d70abcc6f9fefdfc2";
  }

  protected Animal createAnimal() {
    return new Animal(id, "Fabrice", "Elephant", 10, GeoLocation.AFRICA, Diet.HERBIVORE, Status.MENACE, 24, 1, new ArrayList<>());
  }

  @Override
  @Test
  public void testGetOne() {
    Animal animal = createAnimal();
    Mockito.when(animalService.getOneAnimal(id)).thenReturn(animal);

    Animal animalGet = animalService.getOneAnimal(id);

    Mockito.verify(animalService, Mockito.times(1)).getOneAnimal(id);
    Assertions.assertEquals(animal, animalGet);
  }

  @Override
  @Test
  public void testGetAll() {
    List<Animal> listAnimals = new ArrayList<>();
    listAnimals.add(createAnimal());
    listAnimals.add(new Animal("6470801d70abcc6f9fefdfc3", "Alice", "Lion", 10, GeoLocation.AFRICA, Diet.CARNIVORE, Status.MENACE, 15, 2, new ArrayList<>()));

    Mockito.when(animalService.getAllAnimals()).thenReturn(listAnimals);

    List<Animal> animalsGet = animalService.getAllAnimals();

    Mockito.verify(animalService, Mockito.times(1)).getAllAnimals();
    Assertions.assertEquals(2, animalsGet.size());
    Assertions.assertEquals(animalsGet, listAnimals);

  }

  @Override
  @Test
  public void testAdd() {
    Animal animalToAdd = createAnimal();
    String id = animalToAdd.getId();
    String name = animalToAdd.getName();
    String type = animalToAdd.getTypeAnimal();
    int longevity = animalToAdd.getLongevity();
    String diet  = animalToAdd.getDiet().getValue();
    String status = animalToAdd.getStatus().getValue();
    int gestation = animalToAdd.getGestation();
    int nbKid = animalToAdd.getNbKid();
    String geolocation = animalToAdd.getGeoLocation().getValue();
    List<String> images = animalToAdd.getImages();

    Mockito.when(animalService.addAnimal(id, name, type, longevity, diet, status, gestation, nbKid, geolocation, images)).thenReturn(animalToAdd);

    Animal animalAdded = animalService.addAnimal(id, name, type, longevity, diet, status, gestation, nbKid, geolocation, images);

    Mockito.verify(animalService, Mockito.times(1)).addAnimal(id, name, type, longevity, diet, status, gestation, nbKid, geolocation, images);
    Assertions.assertEquals(animalToAdd, animalAdded );
  }

  @Override
  @Test
  public void testUpdate() {
    Animal existingAnimal = createAnimal();
    String updatedName = "Updated Animal";
    existingAnimal.setName(updatedName);

    String id = existingAnimal.getId();
    String name = existingAnimal.getName();
    String type = existingAnimal.getTypeAnimal();
    int longevity = existingAnimal.getLongevity();
    String diet  = existingAnimal.getDiet().getValue();
    String status = existingAnimal.getStatus().getValue();
    int gestation = existingAnimal.getGestation();
    int nbKid = existingAnimal.getNbKid();
    String geolocation = existingAnimal.getGeoLocation().getValue();
    List<String> images = existingAnimal.getImages();

    Mockito.when(animalService.getOneAnimal(id)).thenReturn(existingAnimal);
    Mockito.when(animalService.updateAnimal(id, name, type, longevity, diet, status, gestation, nbKid, geolocation, images)).thenReturn(existingAnimal);

    animalService.getOneAnimal(id);
    Animal updatedAnimal = animalService.updateAnimal(id, name, type, longevity, diet, status, gestation, nbKid, geolocation, images);

    Mockito.verify(animalService, Mockito.times(1)).getOneAnimal(id);
    Mockito.verify(animalService, Mockito.times(1)).updateAnimal(id, name, type, longevity, diet, status, gestation, nbKid, geolocation, images);

    Assertions.assertEquals(updatedName, updatedAnimal.getName());
  }

  @Override
  @Test
  public void testDelete() {

    Animal animalToDelete = createAnimal();

    Mockito.when(animalService.getOneAnimal(id)).thenReturn(animalToDelete);
    animalService.deleteAnimal(id);

    Mockito.verify(animalService, Mockito.times(1)).deleteAnimal(id);

  }

}
