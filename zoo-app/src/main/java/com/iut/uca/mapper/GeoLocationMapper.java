package com.iut.uca.mapper;

import com.iut.uca.enums.GeoLocation;
import jakarta.inject.Singleton;

@Singleton
public class GeoLocationMapper {

  public GeoLocation map(GeoLocation geoLocation) {
    return getValueFromGeolocationValue(geoLocation.getValue());
  }
  public GeoLocation mapByString(String value) {
    return getValueFromGeolocationValue(value);
  }
  protected GeoLocation getValueFromGeolocationValue(String value) {
    switch(value.toUpperCase()) {
      case "OCEANIA":
        return GeoLocation.OCEANIA;
      case "MIDDLE_EAST":
        return GeoLocation.MIDDLE_EAST;
      case "EUROPE":
        return GeoLocation.EUROPE;
      case "CARIBBEAN":
        return GeoLocation.CARIBBEAN;
      case "ASIA":
        return GeoLocation.ASIA;
      case "AMERICA":
        return GeoLocation.AMERICA;
      case "AFRICA":
        return GeoLocation.AFRICA;
      default:
        return GeoLocation.INCONNU;
    }
  }
}
