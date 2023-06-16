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
import com.iut.uca.repositories.entity.UserId;
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

  public Cagnote addCagnote(
      String id,
      long amount,
      String animalId,
      List<String> usersIds
  ) {
    Animal animal = getAnimalById(animalId);
    List<User> users = getUsersByIds(usersIds);
    Cagnote cagnote = createCagnote(id, amount, animal, users);
    CagnoteEntity entity = cagnoteRepository.insert(cagnoteMapper.mapEntity(cagnote));
    return  cagnoteMapper.mapDto(entity);
  }

  public List<Cagnote> updateCagnote(String id, long amountToAdd, String idUserToAdd) {
    CagnoteEntity cagnoteEntity = cagnoteRepository.get(id);
    cagnoteEntity.addAmount(amountToAdd);

    boolean isUserAlreadyAdded = false;
    for (UserId userId : cagnoteEntity.getUserIds()) {
      if (userId.getId().toHexString().equals(idUserToAdd)) {
        isUserAlreadyAdded = true;
        break;
      }
    }

    if (!isUserAlreadyAdded) {
      cagnoteEntity.addUserId(idUserToAdd);
    }

    cagnoteRepository.update(id, cagnoteEntity);
    List<CagnoteEntity>  cagnoteEntities= cagnoteRepository.list();
    List<Cagnote> cagnotes = new ArrayList<>();
    for (CagnoteEntity entity : cagnoteEntities) {
        cagnotes.add(cagnoteMapper.mapDto(entity));
    }
    return cagnotes;
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

  public Cagnote getCagnoteByAnimalId(String id) {
    CagnoteEntity cagnoteByAnimalId = cagnoteRepository.getCagnoteByAnimalId(id);
    if (cagnoteByAnimalId != null) {
      return cagnoteMapper.mapDto(cagnoteByAnimalId);
    } else {
      return new Cagnote();
    }
  }

}
