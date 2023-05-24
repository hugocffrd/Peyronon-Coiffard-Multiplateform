package com.iut.uca;

import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.is;

import java.util.UUID;
import org.junit.jupiter.api.Test;
import io.quarkus.test.junit.QuarkusTest;

@QuarkusTest
public class UserResourceTest {

    @Test
    public void testGetUserByName() {
        String uuid = UUID.randomUUID().toString();
        given()
                .pathParam("name", uuid)
                .when().get("/api/user/getByName/{name}")
                .then()
                .statusCode(200)
                .body(is("Hello " + uuid));
    }

}
