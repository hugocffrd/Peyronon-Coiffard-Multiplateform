package com.iut.uca.services;

import com.iut.uca.api.dto.User;
import com.iut.uca.mapper.UserMapper;
import com.iut.uca.repositories.UserRepository;
import com.iut.uca.repositories.entity.UserEntity;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import java.util.ArrayList;
import java.util.List;

@ApplicationScoped
public class UserService {

  @Inject
  UserMapper userMapper;
  @Inject
  UserRepository userRepository;

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

  public void addUser(
      String id,
      String name,
      String surname,
      String email,
      String password) {

    User u = createUser(id, name, surname, email, password);
    userRepository.insert(userMapper.mapEntity(u));
  }

  public void updateUser(String id, String name, String surname, String email, String password) {
    User newUser = createUser(id, name, surname, email, password);
    UserEntity userEntity = userRepository.get(id);
  UserEntity userUpdated = userMapper.updateEntity(userEntity, newUser);
  userRepository.update(id, userUpdated);
  }

  protected User createUser(String id, String name, String surname, String email,
      String password) {
    return  new User(id, name, surname, email, password);
  }

  public void deleteUser(String id) {
    userRepository.delete(id);
  }

}
