package com.iut.uca.services;

import jakarta.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class UserService {

  public String getByName(String name) {
    return "Hello " + name;
  }
}
