package com.iut.uca.api.controllers;

import com.iut.uca.api.dto.Cagnote;
import com.iut.uca.api.dto.param.CagnoteParam;
import com.iut.uca.services.CagnoteService;
import jakarta.inject.Inject;
import jakarta.ws.rs.DELETE;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.PUT;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import java.util.List;

@Path("/api/cagnote")
public class CagnoteController {

  /**
   * Service called to reduce logic in controller
   */
  @Inject
  CagnoteService cagnoteService;

  /**
   * Method called to get only on cagnote by his id
   * @param id of the cagnote
   * @return the cagnote wanted
   */
  @GET
  @Path("/{id}")
  public Cagnote getOneCagnote(@PathParam("id") String id) {
    return cagnoteService.getOneCagnote(id);
  }

  /**
   * This method is called when we are on the kitty screen
   * @return the list of the animal in database
   */
  @GET
  @Produces(MediaType.APPLICATION_JSON)
  @Path("/")
  public List<Cagnote> getAllCagnote() {
    return cagnoteService.getAllCagnotes();
  }

  /**
   * This method is called when you want to add a new cagnote in the zoo
   * @param cagnoteParam data of the cagnote that we want to add
   */
  @POST
  @Path("/")
  public void addCagnote(CagnoteParam cagnoteParam) {
    cagnoteService.addCagnote(cagnoteParam.getId(), cagnoteParam.getAmount(), cagnoteParam.getAnimalId(), cagnoteParam.getUsersId());
  }

  /**
   * This method is called to update cagnote
   * @param id of the cagnote to update
   * @param cagnoteParam values of the new cagnote
   */
  @PUT
  @Path("/{id}")
  public List<Cagnote> updateCagnote(@PathParam("id") String id, CagnoteParam cagnoteParam) {
    return cagnoteService.updateCagnote(id, cagnoteParam.getAmountToAdd(), cagnoteParam.getIdUserToAdd());
  }

  /**
   * This method is called when to delete a cagnote
   * @param id of the cagnote to delete
   */
  @DELETE
  @Path("/{id}")
  public void deleteCagnote(@PathParam("id") String id) {
    cagnoteService.deleteCagnote(id);
  }

  /**
   * This method return the cagnote by animal id
   * @param id of the animal
   * @return the cagnote wanted
   */
  @GET
  @Path("/getByAnimalId/{id}")
  public Cagnote getCagnoteByAnimalId(@PathParam("id") String id) {
    return cagnoteService.getCagnoteByAnimalId(id);
  }

}
