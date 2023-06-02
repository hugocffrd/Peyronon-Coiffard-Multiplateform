package com.iut.uca.mapper;

import com.iut.uca.api.dto.Animal;
import com.iut.uca.api.dto.User;
import com.iut.uca.repositories.AnimalRepository;
import com.iut.uca.repositories.entity.AnimalEntity;
import com.iut.uca.repositories.entity.AnimalId;
import com.iut.uca.repositories.entity.UserEntity;
import com.iut.uca.repositories.entity.UserId;
import jakarta.inject.Inject;
import jakarta.inject.Singleton;
import java.util.ArrayList;
import java.util.List;
import org.bson.types.ObjectId;

@Singleton
public class UserMapper implements IMapper<User, UserEntity> {

  @Inject
  AnimalMapper animalMapper;

  @Inject
  AnimalRepository animalRepository;

  public User mapDto(UserEntity userEntity) {
    User u = newInstanceDto();
    u.setId(userEntity.getId().toHexString());
    u.setName(userEntity.getName());
    u.setSurname(userEntity.getSurname());
    u.setPassword(userEntity.getPassword());
    u.setEmail(userEntity.getEmail());
    List<Animal> animalList = new ArrayList<>();
    for (AnimalId animalId : userEntity.getAnimalIds()) {
      Animal animal = animalMapper.mapDto(animalRepository.get(animalId.getId().toHexString()));
      animalList.add(animal);
    }
    u.setAnimals(animalList);
    return u;
  }

  public UserEntity updateEntity(UserEntity userEntity,User user) {
    userEntity.setId(new ObjectId(String.valueOf(user.getId())));
    userEntity.setName(user.getName());
    userEntity.setSurname(user.getSurname());
    userEntity.setEmail(user.getEmail());
    userEntity.setPassword(user.getPassword());
    List<AnimalId> animalEntityList = new ArrayList<>();
    for (Animal animal : user.getAnimals()) {
      animalEntityList.add(new AnimalId(new ObjectId(animal.getId())));
    }
    userEntity.setAnimalIds(animalEntityList);
    return userEntity;
  }

  public UserEntity mapEntity(User u) {
    UserEntity entity = newInstanceEntity();
    entity.setName(u.getName());
    entity.setSurname(u.getSurname());
    entity.setEmail(u.getEmail());
    entity.setPassword(u.getPassword());
    List<AnimalId> animalEntityList = new ArrayList<>();
    for(Animal animal : u.getAnimals() ) {
      animalEntityList.add(new AnimalId(new ObjectId(animal.getId())));
    }
    entity.setAnimalIds(animalEntityList);
    return entity;
  }

  protected User newInstanceDto() {
    return new User();
  }

  protected UserEntity newInstanceEntity() {
    return new UserEntity();
  }

}
