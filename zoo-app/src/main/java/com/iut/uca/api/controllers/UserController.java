package com.iut.uca.api.controllers;

import com.iut.uca.api.dto.User;
import com.iut.uca.api.dto.param.AnimalParam;
import com.iut.uca.api.dto.param.UserParam;
import com.iut.uca.services.UserService;
import jakarta.inject.Inject;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.DELETE;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.PUT;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import java.util.List;

@Path("/api/user")
public class UserController {

  @Inject
  UserService userService;

  @GET
  @Produces(MediaType.TEXT_PLAIN)
  @Path("/{id}")
  public User getOneUser(@PathParam("id") String id) {
    return userService.getOneUser(id);
  }

  @GET
  @Produces(MediaType.TEXT_PLAIN)
  @Path("/")
  public List<User> getAllUsers() {
    return userService.getAllUsers();
  }

  @POST
  @Path("/")
  public void addUser(UserParam userParam) {
    userService.addUser(userParam.getId(), userParam.getName(), userParam.getSurname(), userParam.getEmail(), userParam.getPassword());
  }

  @PUT
  @Path("/{id}")
  @Consumes(MediaType.APPLICATION_JSON)
  public User updateUser(@PathParam("id") String id, UserParam userParam) {
    return userService.updateUser(id, userParam.getName(), userParam.getSurname(), userParam.getEmail(), userParam.getPassword(), userParam.getAnimalIds(), userParam.getAnimal());
  }

  @DELETE
  @Path("/{id}")
  public void deleteUser(@PathParam("id") String id) {
    userService.deleteUser(id);
  }

  @POST
  @Path("/getUserForConnexion")
  public User getUserByEmailAndPassword(UserParam userParam) {
    return userService.getUserByEmailAndPassword(userParam.getEmail(), userParam.getPassword());
  }

  @PUT
  @Path("/changePassword")
  public User changePassword(UserParam userParam) {
    return userService.changePassword(userParam.getEmail(), userParam.getPassword(), userParam.getNewPassword());
  }
}
