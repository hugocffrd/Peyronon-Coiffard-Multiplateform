package com.iut.uca.configuration;

import jakarta.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class Configuration {

  public static final String DATABASE_NAME = "AnimalAppli";
  public static final String ANIMAL_COLLECTION = "Animal";
  public static final String USER_COLLECTION = "User";
  public static final String CAGNOTE_COLLECTION = "Cagnote";
  public static final String $SET = "$set";
  public static final String $REGEX = "$regex";
  public static final String $OPTION = "$options";
  public static final String REGEX_OPERATOR = ".*";
  public static final String REGEX_INSENSITIVE = "i";

}
