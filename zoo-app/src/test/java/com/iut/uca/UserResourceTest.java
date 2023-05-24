package com.iut.uca;

import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.is;
import org.junit.jupiter.api.Test;
import io.quarkus.test.junit.QuarkusTest;

@QuarkusTest
public class UserResourceTest {

    @Test
    public void testGetUserByName() {
        long id = 100;
        given()
                .pathParam("id", id)
                .when().get("/api/user/{id}")
                .then()
                .statusCode(200)
                .body(is("Hello " + id));
    }

}
