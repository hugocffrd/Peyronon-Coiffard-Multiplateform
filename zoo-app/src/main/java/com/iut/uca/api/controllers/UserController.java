package com.iut.uca.api.controllers;

import com.iut.uca.api.dto.User;
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

  /**
   * Service called to reduce logic in controller
   */
  @Inject
  UserService userService;

  /**
   * Method called to get only on user by his id
   * @param id of the user
   * @return the user wanted
   */
  @GET
  @Produces(MediaType.TEXT_PLAIN)
  @Path("/{id}")
  public User getOneUser(@PathParam("id") String id) {
    return userService.getOneUser(id);
  }
  /**
   * This method is called when we want to list users
   * @return the list of the user in database
   */
  @GET
  @Produces(MediaType.TEXT_PLAIN)
  @Path("/")
  public List<User> getAllUsers() {
    return userService.getAllUsers();
  }
  /**
   * This method is called when you want to add a new user in the zoo
   * @param userParam data of the user that we want to add
   */
  @POST
  @Path("/")
  public void addUser(UserParam userParam) {
    userService.addUser(userParam.getId(), userParam.getName(), userParam.getSurname(), userParam.getEmail(), userParam.getPassword());
  }
  /**
   * This method is called to update a user
   * @param id of the user to update
   * @param userParam values of the new user
   */
  @PUT
  @Path("/{id}")
  @Consumes(MediaType.APPLICATION_JSON)
  public User updateUser(@PathParam("id") String id, UserParam userParam) {
    return userService.updateUser(id, userParam.getName(), userParam.getSurname(), userParam.getEmail(), userParam.getPassword(), userParam.getAnimalIds(), userParam.getAnimal());
  }
  /**
   * This method is called when to delete a user
   * @param id of the user to delete
   */
  @DELETE
  @Path("/{id}")
  public void deleteUser(@PathParam("id") String id) {
    userService.deleteUser(id);
  }

  /**
   * Method called when user try to connect to the application
   * @param userParam email and password of user
   * @return user connected
   */
  @POST
  @Path("/getUserForConnexion")
  public User getUserByEmailAndPassword(UserParam userParam) {
    return userService.getUserByEmailAndPassword(userParam.getEmail(), userParam.getPassword());
  }

  /**
   * Method called when user edit his password
   * @param userParam values of current user and new password
   * @return user edited
   */
  @PUT
  @Path("/changePassword")
  public User changePassword(UserParam userParam) {
    return userService.changePassword(userParam.getEmail(), userParam.getPassword(), userParam.getNewPassword());
  }
}
