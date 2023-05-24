package com.iut.uca.mapper;

import com.iut.uca.api.dto.Animal;
import com.iut.uca.api.dto.User;
import com.iut.uca.repositories.entity.AnimalEntity;
import com.iut.uca.repositories.entity.UserEntity;
import jakarta.inject.Inject;
import java.util.ArrayList;
import java.util.List;

public class UserMapper {

  @Inject
  AnimalMapper animalMapper;

  public User map(UserEntity userEntity) {
    User u = newInstance();
    u.setId(userEntity.getId());
    u.setName(userEntity.getName());
    u.setSurname(userEntity.getSurname());
    u.setPassword(userEntity.getPassword());
    u.setEmail(userEntity.getEmail());
    List<Animal> animalList = new ArrayList<>();
    for (AnimalEntity animalEntity : userEntity.getAnimals()) {
        animalList.add(animalMapper.map(animalEntity));
    }
    u.setAnimals(animalList);
    return u;
  }

  public User update() {
    return new User();
  }

  public User newInstance() {
    return new User();
  }
}
