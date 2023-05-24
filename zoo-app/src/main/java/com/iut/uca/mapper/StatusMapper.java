package com.iut.uca.mapper;

import com.iut.uca.enums.Status;
import jakarta.inject.Singleton;

@Singleton
public class StatusMapper {

  public Status map(Status status) {
    switch(status.getValue()) {
      case "ETEINT" : return Status.ETEINT;
      case "MENANCE" : return Status.MENACE;
      case "PREO_MINEURE" : return Status.PREO_MINEURE;
      default: return Status.INCONNU;
    }
  }


}
