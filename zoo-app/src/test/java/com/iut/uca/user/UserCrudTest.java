package com.iut.uca.user;

import com.iut.uca.ICrudTest;
import com.iut.uca.api.dto.Animal;
import com.iut.uca.api.dto.User;
import com.iut.uca.enums.Diet;
import com.iut.uca.enums.GeoLocation;
import com.iut.uca.enums.Status;
import com.iut.uca.mapper.UserMapper;
import com.iut.uca.services.UserService;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;


public class UserCrudTest implements ICrudTest {

    static UserService userService;
    static UserMapper userMapper;

    String userId;

    @Override
    @BeforeEach
    public void setup() {
        userService = Mockito.mock(UserService.class);
        userMapper = Mockito.mock(UserMapper.class);
        userId = "6470826ccd3eafd17c12c3fb";
    }

    private User createUser() {
        String name = "Alice";
        String surname = "Dupont";
        String email = "alice.dupont@example.com";
        String password = "password123";
        return new User(userId, name, surname, email, password);
    }
    @Override
    @Test
    public void testGetOne() {
        User expectedUser = createUser();
        Mockito.when(userService.getOneUser(expectedUser.getId())).thenReturn(expectedUser);
        User userGet = userService.getOneUser(expectedUser.getId());

        Mockito.verify(userService, Mockito.times(1)).getOneUser(expectedUser.getId());
        Assertions.assertEquals(expectedUser, userGet);
    }

    @Override
    @Test
    public void testGetAll() {
        List<User> expectedUsers = new ArrayList<>();
        expectedUsers.add(createUser());
        expectedUsers.add(new User("2", "Bob", "Smith", "bob.smith@example.com", "password456"));

        Mockito.when(userService.getAllUsers()).thenReturn(expectedUsers);
        List<User> users = userService.getAllUsers();

        Mockito.verify(userService, Mockito.times(1)).getAllUsers();
        Assertions.assertEquals(2, users.size());
        Assertions.assertEquals(users, expectedUsers);
    }

    @Override
    @Test
    public void testAdd() {
        User newUser = createUser();

        Mockito.when(userService.addUser( Mockito.eq(newUser.getId()),
            Mockito.eq(newUser.getName()),
            Mockito.eq(newUser.getSurname()),
            Mockito.eq(newUser.getEmail()),
            Mockito.eq(newUser.getPassword()))).thenReturn(newUser);

        User user = userService.addUser(newUser.getId(), newUser.getName(), newUser.getSurname(), newUser.getEmail(),newUser.getPassword());

        Mockito.verify(userService, Mockito.times(1)).addUser(Mockito.eq(newUser.getId()), Mockito.eq(newUser.getName()), Mockito.eq(newUser.getSurname()), Mockito.eq(newUser.getEmail()), Mockito.eq(newUser.getPassword()));
        Assertions.assertEquals(user.getId(), newUser.getId());
        Assertions.assertEquals(user.getName(), newUser.getName());
        Assertions.assertEquals(user.getSurname(), newUser.getSurname());
        Assertions.assertEquals(user.getEmail(), newUser.getEmail());
        Assertions.assertEquals(user.getPassword(), newUser.getPassword());
    }


    @Override
    @Test
    public void testUpdate() {
        Animal animal = createAnimal();
        User userGet = createUser();
        User updatedUser = createUpdatedUser();

        String updatedName = "Alice Updated";
        String updatedSurname = "Dupont Updated";
        String updatedEmail = "alice.updated@example.com";
        String updatedPassword = "updatedpassword123";
        List<String> animalIds = Arrays.asList("animalId1", "animalId2");

        Mockito.when(userService.getOneUser(userId)).thenReturn(userGet);
        Mockito.when(userService.updateUser(userId, updatedUser.getName(), updatedUser.getSurname(), updatedUser.getEmail(),updatedUser.getPassword(), animalIds, animal)).thenReturn(updatedUser);

        userService.getOneUser(userId);
        User result = userService.updateUser(userId, updatedName, updatedSurname, updatedEmail, updatedPassword, animalIds, animal);
        userMapper.updateEntity(userMapper.mapEntity(result),result);
        Mockito.verify(userService, Mockito.times(1)).getOneUser(userId);
        Mockito.verify(userService, Mockito.times(1)).updateUser(userId, updatedUser.getName(), updatedUser.getSurname(), updatedUser.getEmail(),updatedUser.getPassword(), animalIds, animal);
        Mockito.verify(userMapper, Mockito.times(1)).updateEntity(userMapper.mapEntity(result), updatedUser);

        Assertions.assertEquals(updatedUser, result);
    }

    private User createUpdatedUser() {
        String updatedName = "Alice Updated";
        String updatedSurname = "Dupont Updated";
        String updatedEmail = "alice.updated@example.com";
        String updatedPassword = "updatedpassword123";
        List<Animal> updatedAnimals = Arrays.asList(
            new Animal("animalId1", "Tiger", "Mammal", 15, GeoLocation.ASIA, Diet.CARNIVORE, Status.ETEINT, 4, 3, new ArrayList<>()),
            new Animal("animalId2", "Elephant", "Mammal", 25, GeoLocation.AFRICA, Diet.HERBIVORE, Status.MENACE, 6, 1, new ArrayList<>())
        );
        return new User(userId, updatedName,updatedSurname, updatedEmail,updatedPassword, updatedAnimals);
    }
    private Animal createAnimal() {
        return new Animal("animalId1", "Lion", "Mammal", 10, GeoLocation.AFRICA, Diet.CARNIVORE, Status.ETEINT, 3, 2, new ArrayList<>());
    }

    @Override
    @Test
    public void testDelete() {
        User deleteUser = createUser();

        Mockito.when(userService.getOneUser(deleteUser.getId())).thenReturn(deleteUser);
        userService.deleteUser(deleteUser.getId());

        Mockito.verify(userService, Mockito.times(1)).deleteUser(Mockito.eq(deleteUser.getId()));
    }
}