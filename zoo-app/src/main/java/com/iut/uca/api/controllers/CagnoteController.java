package com.iut.uca.api.controllers;

import com.iut.uca.api.dto.Cagnote;
import com.iut.uca.api.dto.param.CagnoteParam;
import com.iut.uca.repositories.entity.CagnoteEntity;
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
  @Inject
  CagnoteService cagnoteService;

  @GET
  @Produces(MediaType.TEXT_PLAIN)
  @Path("/{id}")
  public Cagnote getOneCagnote(@PathParam("id") String id) {
    return cagnoteService.getOneCagnote(id);
  }

  @GET
  @Produces(MediaType.APPLICATION_JSON)
  @Path("/")
  public List<Cagnote> getAllCagnote() {
    return cagnoteService.getAllCagnotes();
  }

  @POST
  @Path("/")
  public void addCagnote(CagnoteParam cagnoteParam) {
    cagnoteService.addCagnote(cagnoteParam.getId(), cagnoteParam.getAmount(), cagnoteParam.getAnimalId(), cagnoteParam.getUsersId());
  }

  @PUT
  @Path("/{id}")
  public List<Cagnote> updateCagnote(@PathParam("id") String id, CagnoteParam cagnoteParam) {
    return cagnoteService.updateCagnote(id, cagnoteParam.getAmountToAdd(), cagnoteParam.getIdUserToAdd());
  }

  @DELETE
  @Path("/{id}")
  public void deleteCagnote(@PathParam("id") String id) {
    cagnoteService.deleteCagnote(id);
  }

  @GET
  @Path("/getByAnimalId/{id}")
  public Cagnote getCagnoteByAnimalId(@PathParam("id") String id) {
    return cagnoteService.getCagnoteByAnimalId(id);
  }

}
