package com.iut.uca.services;

import com.iut.uca.api.dto.Animal;
import com.iut.uca.api.dto.User;
import com.iut.uca.api.dto.param.AnimalParam;
import com.iut.uca.enums.Diet;
import com.iut.uca.enums.GeoLocation;
import com.iut.uca.enums.Status;
import com.iut.uca.mapper.AnimalMapper;
import com.iut.uca.mapper.UserMapper;
import com.iut.uca.repositories.AnimalRepository;
import com.iut.uca.repositories.UserRepository;
import com.iut.uca.repositories.entity.UserEntity;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@ApplicationScoped
public class UserService {

  @Inject
  UserMapper userMapper;
  @Inject
  UserRepository userRepository;
  @Inject
  AnimalMapper animalMapper;
  @Inject
  AnimalRepository animalRepository;

  public User getOneUser(String id) {
    return userMapper.mapDto(userRepository.get(id)) ;
  }

  public List<User> getAllUsers() {
    List<UserEntity> userEntities = userRepository.list();
    List<User> userList = new ArrayList<>();
    for (UserEntity animalEntity : userEntities) {
      userList.add(userMapper.mapDto(animalEntity));
    }
    return userList;
  }

  public User addUser(
      String id,
      String name,
      String surname,
      String email,
      String password) {

    User u = createUser(id, name, surname, email, password);
    UserEntity userAdded =  userRepository.insert(userMapper.mapEntity(u));
    return userMapper.mapDto(userAdded);
  }

  public User updateUser(String id, String name, String surname, String email, String password, List<String> animalIds, Animal animal) {
    User newUser = createUser(id, name, surname, email, password);
    setUserAnimalList(animalIds, animal, newUser);
    UserEntity userEntity = userRepository.get(id);
    UserEntity userUpdated = userMapper.updateEntity(userEntity, newUser);
    return userMapper.mapDto(userRepository.update(id, userUpdated));
  }

  protected void setUserAnimalList(List<String> animalIds, Animal animal, User newUser) {
    List<Animal> animalList = new ArrayList<>();

    for (String animalId : animalIds) {
      Animal existingAnimal = animalMapper.mapDto(animalRepository.get(animalId));
      if (existingAnimal != null) {
        animalList.add(existingAnimal);
      }
    }

    boolean isAnimalPresent = false;
    if (animal != null) {
      for (Animal existingAnimal : animalList) {
        if (existingAnimal.getId().equals(animal.getId())) {
          isAnimalPresent = true;
          break;
        }
      }
    }

    if (animal != null) {
      if (isAnimalPresent) {
        animalList.removeIf(existingAnimal -> existingAnimal.getId().equals(animal.getId()));
      } else {
        animalList.add(animal);
      }
    }

    // Set the updated animal list in the user object
    newUser.setAnimals(animalList);
  }
  protected User createUser(String id, String name, String surname, String email,
      String password) {
    return  new User(id, name, surname, email, password);
  }
  public void deleteUser(String id) {
    userRepository.delete(id);
  }
  public User getUserByEmailAndPassword(String email, String password) {
    UserEntity userEntity = userRepository.getUserByEmailAndPassword(email, password);
    return userMapper.mapDto(userEntity);
  }

  public User changePassword(String email, String password, String newPassword) {
    UserEntity userEntity = userRepository.getUserByEmailAndPassword(email, password);
    userEntity.setPassword(newPassword);
    UserEntity userUpdated = userRepository.update(userEntity.getId().toHexString(), userEntity);
    return userMapper.mapDto(userUpdated);
  }

}
