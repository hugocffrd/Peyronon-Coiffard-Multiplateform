package com.iut.uca.mapper;

import com.iut.uca.api.dto.Animal;
import com.iut.uca.api.dto.User;
import com.iut.uca.repositories.entity.AnimalEntity;
import com.iut.uca.repositories.entity.UserEntity;
import jakarta.inject.Inject;
import java.util.ArrayList;
import java.util.List;

public class UserMapper implements IMapper<User, UserEntity> {

  @Inject
  AnimalMapper animalMapper;

  public User mapDto(UserEntity userEntity) {
    User u = newDtoInstance();
    u.setId(userEntity.getId());
    u.setName(userEntity.getName());
    u.setSurname(userEntity.getSurname());
    u.setPassword(userEntity.getPassword());
    u.setEmail(userEntity.getEmail());
    List<Animal> animalList = new ArrayList<>();
    for (AnimalEntity animalEntity : userEntity.getAnimals()) {
        animalList.add(animalMapper.mapDto(animalEntity));
    }
    u.setAnimals(animalList);
    return u;
  }

  public UserEntity mapEntity(User u) {
    UserEntity entity = newEntityInstance();
    return entity;
  }

  public User update() {
    return new User();
  }

  public User newDtoInstance() {
    return new User();
  }

  public UserEntity newEntityInstance() {
    return new UserEntity();
  }
}
