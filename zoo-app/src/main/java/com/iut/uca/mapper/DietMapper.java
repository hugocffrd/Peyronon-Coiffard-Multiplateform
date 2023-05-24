package com.iut.uca.mapper;

import com.iut.uca.enums.Diet;
import jakarta.inject.Inject;
import jakarta.inject.Singleton;

@Singleton
public class DietMapper {

  public Diet map(Diet diet) {
    switch(diet.getValue()) {
      case "CARNIVORE": return Diet.CARNIVORE;
      case "HERBIVORE": return Diet.HERBIVORE;
      case "OMNIVORE": return Diet.OMNIVORE;
      default: return Diet.INCONNU;
    }
  }

}
