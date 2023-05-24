package com.iut.uca.resources;

import com.iut.uca.services.UserService;
import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

@Path("/api/user")
public class UserResource {

  @Inject
  UserService userService;

  @GET
  @Produces(MediaType.TEXT_PLAIN)
  @Path("/getByName/{name}")
  public String greeting(String name) {
    return userService.getByName(name);
  }

}
