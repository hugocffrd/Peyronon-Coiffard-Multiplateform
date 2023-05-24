package com.iut.uca.services;

import com.iut.uca.models.User;
import jakarta.enterprise.context.ApplicationScoped;
import java.util.ArrayList;
import java.util.List;

@ApplicationScoped
public class UserService {

  public String getOneUser(long name) {
    return "Hello " + name;
  }

  public List<User> getAllUsers() {
    return new ArrayList<>();
  }

  public void addUser(User user) {

  }

  public void updateUser(long id) {

  }

  public void deleteUser(long id) {

  }

}
