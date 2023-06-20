package com.iut.uca.configuration;

import jakarta.enterprise.context.ApplicationScoped;

/**
 * Global configuration with database name, collection name, global operator and so on...
 */
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
  public static final String $MATCH = "$match";
  public static final String $GROUP = "$group";
  public static final String $PROJECT = "$project";
  public static final String $PUSH = "$push";
  public static final String $$ROOT = "$$ROOT";
  public static final String ANIMALS = "animals";

}
