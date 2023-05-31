package com.iut.uca.mapper;

import com.iut.uca.enums.Status;
import jakarta.inject.Singleton;

@Singleton
public class StatusMapper {

  public Status map(Status status) {
    return getValueFromStatusValue(status.getValue());
  }
  public Status mapByString(String value) {
    return getValueFromStatusValue(value);
  }
  protected Status getValueFromStatusValue(String value) {
    switch(value) {
      case "ETEINT" :
        return Status.ETEINT;
      case "MENANCE" :
        return Status.MENACE;
      case "PREO_MINEURE" :
        return Status.PREO_MINEURE;
      case "VIVANR" :
        return Status.VIVANT;
      default:
        return Status.INCONNU;
    }
  }
}
