package com.iut.uca.mapper;

import com.iut.uca.api.dto.Animal;
import com.iut.uca.api.dto.Cagnote;
import com.iut.uca.api.dto.User;
import com.iut.uca.repositories.AnimalRepository;
import com.iut.uca.repositories.UserRepository;
import com.iut.uca.repositories.entity.AnimalId;
import com.iut.uca.repositories.entity.CagnoteEntity;
import com.iut.uca.repositories.entity.UserId;
import jakarta.inject.Inject;
import jakarta.inject.Singleton;
import java.util.ArrayList;
import java.util.List;
import org.bson.types.ObjectId;

@Singleton
public class CagnoteMapper implements  IMapper<Cagnote, CagnoteEntity>{

  @Inject
  AnimalMapper animalMapper;
  @Inject
  UserMapper userMapper;
  @Inject
  AnimalRepository animalRepository;
  @Inject
  UserRepository userRepository;

  @Override
  public Cagnote mapDto(CagnoteEntity entity) {
    Cagnote cagnote = newInstanceDto();
    cagnote.setId(entity.getId().toHexString());
    cagnote.setAmount(entity.getAmount());
    Animal animal = animalMapper.mapDto(animalRepository.get(entity.getAnimalId().getId().toHexString()));
    cagnote.setAnimal(animal);
    List<User> users = new ArrayList<>();
    for (UserId userId : entity.getUserIds()) {
      User user = userMapper.mapDto(userRepository.get(userId.getId().toHexString()));
      users.add(user);
    }
    cagnote.setUsers(users);
    return cagnote;
  }

  @Override
  public CagnoteEntity mapEntity(Cagnote dto) {
    CagnoteEntity cagnoteEntity = newInstanceEntity();
    cagnoteEntity.setId(new ObjectId(dto.getId()));
    cagnoteEntity.setAnimalId(new AnimalId(new ObjectId(dto.getAnimal().getId())));
    cagnoteEntity.setAmount(dto.getAmount());
    List<UserId> users = new ArrayList<>();
    for(User user: dto.getUsers()) {
      users.add(new UserId(new ObjectId(user.getId())));
    }
    cagnoteEntity.setUserIds(users);
    return cagnoteEntity;
  }

  public CagnoteEntity updateEntity(CagnoteEntity cagnoteEntity,Cagnote cagnote) {
    cagnoteEntity.setId(new ObjectId(String.valueOf(cagnote.getId())));
    cagnoteEntity.setAnimalId(new AnimalId(new ObjectId(cagnote.getAnimal().getId())));
    cagnoteEntity.setAmount(cagnote.getAmount());
    List<UserId> users = new ArrayList<>();
    for (User user : cagnote.getUsers()) {
      users.add(new UserId(new ObjectId(user.getId())));
    }
    cagnoteEntity.setUserIds(users);
    return cagnoteEntity;
  }

  protected Cagnote newInstanceDto() {
    return new Cagnote();
  }

  protected CagnoteEntity newInstanceEntity() {
    return new CagnoteEntity();
  }

}
