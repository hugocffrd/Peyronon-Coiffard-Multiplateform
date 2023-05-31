package com.iut.uca.services;

import com.iut.uca.api.dto.Animal;
import com.iut.uca.api.dto.Cagnote;
import com.iut.uca.api.dto.User;
import com.iut.uca.mapper.AnimalMapper;
import com.iut.uca.mapper.CagnoteMapper;
import com.iut.uca.mapper.UserMapper;
import com.iut.uca.repositories.AnimalRepository;
import com.iut.uca.repositories.CagnoteRepository;
import com.iut.uca.repositories.UserRepository;
import com.iut.uca.repositories.entity.CagnoteEntity;
import com.iut.uca.repositories.entity.UserEntity;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import java.util.ArrayList;
import java.util.List;
@ApplicationScoped
public class CagnoteService {
  @Inject
  CagnoteRepository cagnoteRepository;
  @Inject
  UserRepository userRepository;
  @Inject
  AnimalRepository animalRepository;
  @Inject
  CagnoteMapper cagnoteMapper;
  @Inject
  UserMapper userMapper;
  @Inject
  AnimalMapper animalMapper;


  public Cagnote getOneCagnote(String id) {
    return cagnoteMapper.mapDto(cagnoteRepository.get(id)) ;
  }

  public List<Cagnote> getAllCagnotes() {
    List<CagnoteEntity> cagnoteEntities = cagnoteRepository.list();
    List<Cagnote> cagnotes = new ArrayList<>();
    for (CagnoteEntity cagnoteEntity : cagnoteEntities) {
      cagnotes.add(cagnoteMapper.mapDto(cagnoteEntity));
    }
    return cagnotes;
  }

  public void addCagnote(
      String id,
      long amount,
      String animalId,
      List<String> usersIds
  ) {
    Animal animal = getAnimalById(animalId);
    List<User> users = getUsersByIds(usersIds);
    Cagnote cagnote = createCagnote(id, amount, animal, users);
    cagnoteRepository.insert(cagnoteMapper.mapEntity(cagnote));
  }

  public void updateCagnote(
      String id,
      long amount,
      String animalId,
      List<String> userIds) {
    Animal animal = getAnimalById(animalId);
    List<User> users = getUsersByIds(userIds);
    Cagnote newCagnote = createCagnote(id, amount, animal, users);
    CagnoteEntity cagnoteEntity = cagnoteRepository.get(id);
    CagnoteEntity updatedCagnote = cagnoteMapper.updateEntity(cagnoteEntity, newCagnote);
    cagnoteRepository.update(id, updatedCagnote);
  }
  public void deleteCagnote(String id) {
    cagnoteRepository.delete(id);
  }
  protected Animal getAnimalById(String animalId) {
    return animalMapper.mapDto(animalRepository.get(animalId));
  }

  protected List<User> getUsersByIds(List<String> userIds) {
    List<UserEntity> userEntities = userRepository.getByIds(userIds);
    List<User> users = new ArrayList<>();
    for (UserEntity userEntity : userEntities) {
      users.add(userMapper.mapDto(userEntity));
    }
    return users;
  }

  protected Cagnote createCagnote(String id, long amount, Animal animal,List<User> users) {
    return new Cagnote(id, animal, users, amount);
  }

}
