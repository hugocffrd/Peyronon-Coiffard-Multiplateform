package com.iut.uca.api.controllers;

import com.iut.uca.api.dto.Animal;
import com.iut.uca.api.dto.param.AnimalParam;
import com.iut.uca.services.AnimalService;
import jakarta.inject.Inject;
import jakarta.ws.rs.DELETE;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.PUT;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import java.util.List;

@Path("/api/animal")
public class AnimalController {

  @Inject
  AnimalService animalService;

  @GET
  @Path("/{id}")
  public Animal getOneAnimal(@PathParam("id") String id) {
    return animalService.getOneAnimal(id);
  }

  @GET
  @Path("/")
  public List<Animal> getAllAnimals() {
    return animalService.getAllAnimals();
  }

  @POST
  @Path("/")
    public void addAnimals(AnimalParam animalParam) {
    animalService.addAnimal(animalParam.getId(), animalParam.getName(), animalParam.getTypeAnimal(),
        animalParam.getLongevity(), animalParam.getDiet(), animalParam.getStatus(), animalParam.getGestation(),
        animalParam.getNbKid(), animalParam.getGeoLocation(), animalParam.getImages());
  }

  @PUT
  @Path("/{id}")
  public void updateAnimal(@PathParam("id") String id, AnimalParam animalParam) {
    animalService.updateAnimal(id, animalParam.getName(),animalParam.getTypeAnimal(),
        animalParam.getLongevity(),animalParam.getDiet(), animalParam.getStatus(),
        animalParam.getGestation(), animalParam.getNbKid(), animalParam.getGeoLocation(),
        animalParam.getImages());
  }

  @DELETE
  @Path("/{id}")
  public void deleteAnimal(@PathParam("id")String id) {
    animalService.deleteAnimal(id);
  }

  @GET
  @Path("/getByName")
  public List<Animal> getAnimalsByName(AnimalParam animalParam) {
    return animalService.getAnimalsByName(animalParam.getName());
  }

  @GET
  @Path("/getByType")
  public List<Animal> getAnimalsByType(AnimalParam animalParam) {
    return animalService.getAnimalByType(animalParam.getTypeAnimal());
  }
}
