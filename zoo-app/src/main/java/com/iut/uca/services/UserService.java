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

  public void addUser(User user) {
    userRepository.insert(userMapper.mapEntity(user));
  }

  public void updateUser(long id) {

  }

  public void deleteUser(String id) {
    userRepository.delete(id);
  }

}
