package com.iut.uca.mapper;

import com.iut.uca.enums.Diet;
import jakarta.inject.Inject;
import jakarta.inject.Singleton;

@Singleton
public class DietMapper {

  public Diet map(Diet diet) {
   return getValueFromDietValue(diet.getValue());
  }

  public Diet mapByString(String value) {
    return getValueFromDietValue(value);
  }

  public Diet getValueFromDietValue(String value) {
    switch(value) {
      case "CARNIVORE": return Diet.CARNIVORE;
      case "INSECTIVORE": return Diet.INSECTIVORE;
      case "HERBIVORE": return Diet.HERBIVORE;
      case "OMNIVORE": return Diet.OMNIVORE;
      default: return Diet.INCONNU;
    }
  }

}
