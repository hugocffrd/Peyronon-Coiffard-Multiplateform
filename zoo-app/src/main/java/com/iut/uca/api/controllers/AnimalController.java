package com.iut.uca.api.controllers;

import com.iut.uca.services.AnimalService;
import com.iut.uca.api.dto.Animal;
import jakarta.inject.Inject;
import jakarta.ws.rs.DELETE;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.PUT;
import jakarta.ws.rs.Path;
import java.util.List;
import org.bson.types.ObjectId;

@Path("/api/animal")
public class AnimalController {

  @Inject
  AnimalService animalService;

  @GET
  @Path("/{id}")
  public Animal getOneAnimal(long id) {
    return animalService.getOneAnimal(id);
  }

  @GET
  @Path("/")
  public List<Animal> getAllAnimals() {
    return animalService.getAllAnimals();
  }

  @POST
  @Path("/")
  public void addAnimals(Animal animal) {
    animalService.addAnimal(animal);
  }

  @PUT
  @Path("/{id}")
  public void updateAnimal(long id) {
    animalService.updateAnimal(id);
  }

  @DELETE
  @Path("/{id}")
  public void deleteAnimal(long id) {
    animalService.deleteAnimal(id);
  }
}
