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

  /**
   * Service called to reduce logic in controller
   */
  @Inject
  AnimalService animalService;

  /**
   * Method called to get only on animal by his id
   * @param id of the animal
   * @return the animal wanted
   */
  @GET
  @Path("/{id}")
  public Animal getOneAnimal(@PathParam("id") String id) {
    return animalService.getOneAnimal(id);
  }

  /**
   * This method is called when we start the application
   * @return the list of the animal in database
   */
  @GET
  @Path("/")
  public List<Animal> getAllAnimals() {
    return animalService.getAllAnimals();
  }

  /**
   * This method is called when you want to add a new animal in the zoo
   * @param animalParam data of the animal that we want to add
   */
  @POST
  @Path("/")
    public void addAnimals(AnimalParam animalParam) {
    animalService.addAnimal(animalParam.getId(), animalParam.getName(), animalParam.getTypeAnimal(),
        animalParam.getLongevity(), animalParam.getDiet(), animalParam.getStatus(), animalParam.getGestation(),
        animalParam.getNbKid(), animalParam.getGeoLocation(), animalParam.getImages());
  }

  /**
   * This method is called to update an animal
   * @param id of the animal to update
   * @param animalParam values of the new animal
   */
  @PUT
  @Path("/{id}")
  public void updateAnimal(@PathParam("id") String id, AnimalParam animalParam) {
    animalService.updateAnimal(id, animalParam.getName(),animalParam.getTypeAnimal(),
        animalParam.getLongevity(),animalParam.getDiet(), animalParam.getStatus(),
        animalParam.getGestation(), animalParam.getNbKid(), animalParam.getGeoLocation(),
        animalParam.getImages());
  }

  /**
   * This method is called when to delete an animal
   * @param id of the animal to delete
   */
  @DELETE
  @Path("/{id}")
  public void deleteAnimal(@PathParam("id")String id) {
    animalService.deleteAnimal(id);
  }

  /**
   * This method is called to get animals which contains the parameter
   * @param name name of animal we are searching
   * @return a list of animal corresponding to the search
   */
  @GET
  @Path("/getByName/{name}")
  public List<Animal> getAnimalsByName(@PathParam("name")String name) {
    return animalService.getAnimalsByName(name);
  }

  /**
   * This method is called to get animals which contains the parameter
   * @return a list of animal corresponding to the search
   */
  @GET
  @Path("/getByType")
  public List<Animal> getAnimalsByType(AnimalParam animalParam) {
    return animalService.getAnimalByType(animalParam.getTypeAnimal());
  }
}
