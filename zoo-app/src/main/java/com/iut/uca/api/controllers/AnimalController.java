package com.iut.uca.api.controllers;

import com.iut.uca.api.dto.Animal;
import com.iut.uca.services.AnimalService;
import jakarta.inject.Inject;
import jakarta.ws.rs.DELETE;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.PUT;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.QueryParam;
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
    public void addAnimals(
        @QueryParam("_id") String id,
      @QueryParam("name") String name,
      @QueryParam("typeAnimal") String typeAnimal,
      @QueryParam("longevity") int longevity,
      @QueryParam("diet") String diet,
      @QueryParam("status") String status,
      @QueryParam("gestation") int gestation,
      @QueryParam("nbKid") int nbKid,
      @QueryParam("geoLocation") String geoLocation,
      @QueryParam("images") List<String> images
  ) {
    animalService.addAnimal(id, name, typeAnimal, longevity, diet, status, gestation, nbKid, geoLocation, images);
  }

  @PUT
  @Path("/{id}")
  public void updateAnimal(@PathParam("id") String id,
      @QueryParam("name") String name,
      @QueryParam("typeAnimal") String typeAnimal,
      @QueryParam("longevity") int longevity,
      @QueryParam("diet") String diet,
      @QueryParam("status") String status,
      @QueryParam("gestation") int gestation,
      @QueryParam("nbKid") int nbKid,
      @QueryParam("geoLocation") String geoLocation,
      @QueryParam("images") List<String> images

  ) {
    animalService.updateAnimal(id, name, typeAnimal, longevity, diet, status, gestation, nbKid, geoLocation, images);
  }

  @DELETE
  @Path("/{id}")
  public void deleteAnimal(@PathParam("id")String id) {
    animalService.deleteAnimal(id);
  }
}
