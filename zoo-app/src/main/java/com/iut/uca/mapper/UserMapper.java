package com.iut.uca.mapper;

import com.iut.uca.api.dto.Animal;
import com.iut.uca.api.dto.User;
import com.iut.uca.repositories.entity.AnimalEntity;
import com.iut.uca.repositories.entity.UserEntity;
import jakarta.inject.Inject;
import jakarta.inject.Singleton;
import java.util.ArrayList;
import java.util.List;

@Singleton
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

  public UserEntity updateEntity(UserEntity userEntity,User user) {
    userEntity.setId(user.getId());
    userEntity.setName(user.getName());
    userEntity.setSurname(user.getSurname());
    userEntity.setEmail(user.getEmail());
    userEntity.setPassword(user.getPassword());
    List<AnimalEntity> animalEntityList = new ArrayList<>();
    for (Animal animal : user.getAnimals()) {
      animalEntityList.add(animalMapper.mapEntity(animal));
    }
    userEntity.setAnimals(animalEntityList);
    return userEntity;
  }

  public UserEntity mapEntity(User u) {
    UserEntity entity = newEntityInstance();
    entity.setName(u.getName());
    entity.setSurname(u.getSurname());
    entity.setEmail(u.getEmail());
    entity.setPassword(u.getPassword());
    List<AnimalEntity> animalEntityList = new ArrayList<>();
    for(Animal animal : u.getAnimals() ) {
      animalEntityList.add(animalMapper.mapEntity(animal));
    }
    entity.setAnimals(animalEntityList);
    return entity;
  }

  public User newDtoInstance() {
    return new User();
  }

  public UserEntity newEntityInstance() {
    return new UserEntity();
  }
}
