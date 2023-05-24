package com.iut.uca.resources;

import com.iut.uca.models.User;
import com.iut.uca.services.UserService;
import jakarta.inject.Inject;
import jakarta.ws.rs.DELETE;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.PUT;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import java.util.List;
import java.util.Objects;

@Path("/api/user")
public class UserResource {

  @Inject
  UserService userService;

  @GET
  @Produces(MediaType.TEXT_PLAIN)
  @Path("/{id}")
  public String getOneUser(long id) {
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
  public void addUser(User user) {
     userService.addUser(user);
  }

  @PUT
  @Path("/{id}")
  public void updateUser(long id) {
    userService.updateUser(id);
  }

  @DELETE
  @Path("/{id}")
  public void deleteUser(long id) {
    userService.deleteUser(id);
  }
}
