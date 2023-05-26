package com.iut.uca.api.controllers;

import com.iut.uca.api.dto.User;
import com.iut.uca.services.UserService;
import jakarta.inject.Inject;
import jakarta.ws.rs.DELETE;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.PUT;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.QueryParam;
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
  public void addUser(
      @QueryParam("_id") String id,
      @QueryParam("name") String name,
      @QueryParam("surname") String surname,
      @QueryParam("email") String email,
      @QueryParam("password") String password
  ) {
    userService.addUser(id, name, surname, email, password);
  }

  @PUT
  @Path("/{id}")
  public void updateUser(@PathParam("id") String id,
      @QueryParam("name") String name,
      @QueryParam("surname") String surname,
      @QueryParam("email") String email,
      @QueryParam("password") String password) {
    userService.updateUser(id, name, surname, email, password);
  }

  @DELETE
  @Path("/{id}")
  public void deleteUser(@PathParam("id") String id) {
    userService.deleteUser(id);
  }
}
