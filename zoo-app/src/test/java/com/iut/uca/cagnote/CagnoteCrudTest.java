package com.iut.uca.cagnote;

import com.iut.uca.ICrudTest;
import com.iut.uca.api.dto.Animal;
import com.iut.uca.api.dto.Cagnote;
import com.iut.uca.api.dto.User;
import com.iut.uca.enums.Diet;
import com.iut.uca.enums.GeoLocation;
import com.iut.uca.enums.Status;
import com.iut.uca.mapper.CagnoteMapper;
import com.iut.uca.services.CagnoteService;
import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class CagnoteCrudTest implements ICrudTest {

  CagnoteMapper cagnoteMapper;
  CagnoteService cagnoteService;
  String id;

  @Override
  @BeforeEach
  public void setup() {
    cagnoteMapper = Mockito.mock(CagnoteMapper.class);
    cagnoteService = Mockito.mock(CagnoteService.class);
    id = "64773b72bb58c9e405c73e4e";
  }

  protected Cagnote createCagnote() {
    Animal animal = createAnimal();
    User u1 = createUser1();
    User u2 = createUser2();
    List<User> users = new ArrayList<>();
    users.add(u1);
    users.add(u2);
    return new Cagnote(id, animal, users, 500 );
  }

  private User createUser1() {
    return new User("6470826ccd3eafd17c12c3fb", "Alice", "Dupont", "alice.dupont@example.com", "password123");
  }

  private User createUser2() {
    return new User("2", "Bob", "Smith", "bob.smith@example.com", "password456");
  }

  private Animal createAnimal() {
    return new Animal(id, "Fabrice", "Elephant", 10, GeoLocation.AFRICA, Diet.HERBIVORE, Status.MENACE, 24, 1, new ArrayList<>());
  }

  @Test
  public void testGetOne() {
    Cagnote cagnote= createCagnote();
    Mockito.when(cagnoteService.getOneCagnote(id)).thenReturn(cagnote);

    Cagnote cagnoteGet = cagnoteService.getOneCagnote(id);

    Mockito.verify(cagnoteService, Mockito.times(1)).getOneCagnote(id);
    Assertions.assertEquals(cagnote, cagnoteGet);

  }

  @Override
  @Test
  public void testGetAll() {

    List<Cagnote> cagnoteList = new ArrayList<>();
    cagnoteList.add(createCagnote());
    List<User> users = new ArrayList<>();
    users.add(createUser1());
    cagnoteList.add(new Cagnote("6480b05deea2491928e4957f", createAnimal(),users, 200 ));

    Mockito.when(cagnoteService.getAllCagnotes()).thenReturn(cagnoteList);

    List<Cagnote> cagnotesGet = cagnoteService.getAllCagnotes();

    Mockito.verify(cagnoteService, Mockito.times(1)).getAllCagnotes();
    Assertions.assertEquals(cagnotesGet, cagnoteList);
  }

  @Override
  @Test
  public void testAdd() {
    Cagnote cagnote = createCagnote();
    String id = cagnote.getId();
    String animalId = cagnote.getAnimal().getId();
    List<User> users = cagnote.getUsers();
    List<String> userIds = new ArrayList<>();
    for (User user : users) {
       userIds.add(user.getId());
    }
    long amount = cagnote.getAmount();
    Mockito.when(cagnoteService.addCagnote(id, amount, animalId, userIds)).thenReturn(cagnote);

    Cagnote cagnoteAdded = cagnoteService.addCagnote(id, amount, animalId, userIds);

    Mockito.verify(cagnoteService, Mockito.times(1)).addCagnote(id, amount, animalId, userIds);
    Assertions.assertEquals(cagnoteAdded, cagnote);
  }

  @Override
  @Test
  public void testUpdate() {
    Cagnote existingCagnote = createCagnote();
    List<Cagnote> cagnotes = new ArrayList<>();
    cagnotes.add(existingCagnote);
    String updatedId = "UpdatedId";
    existingCagnote.setId(updatedId);

    String id = existingCagnote.getId();
    long amountToAdd = 20;
    String idUser = "6470826ccd3eafd17c12c3fc";

    Mockito.when(cagnoteService.getOneCagnote(id)).thenReturn(existingCagnote);
    Mockito.when(cagnoteService.updateCagnote(id, amountToAdd, idUser)).thenReturn(cagnotes);

    cagnoteService.getOneCagnote(id);
    List<Cagnote> updatedCagnote = cagnoteService.updateCagnote(id, amountToAdd, idUser);

    Mockito.verify(cagnoteService, Mockito.times(1)).getOneCagnote(id);
    Mockito.verify(cagnoteService, Mockito.times(1)).updateCagnote(id, amountToAdd, idUser);

    Assertions.assertEquals(cagnotes, updatedCagnote);
  }

  @Override
  @Test
  public void testDelete() {

    Cagnote cagnote = createCagnote();

    Mockito.when(cagnoteService.getOneCagnote(id)).thenReturn(cagnote);
    cagnoteService.deleteCagnote(id);

    Mockito.verify(cagnoteService, Mockito.times(1)).deleteCagnote(id);

  }

}
