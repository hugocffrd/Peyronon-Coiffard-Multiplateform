package com.iut.uca.mapper;

import com.iut.uca.enums.GeoLocation;
import jakarta.inject.Singleton;

@Singleton
public class GeoLocationMapper {

  public GeoLocation map(GeoLocation geoLocation) {
    switch(geoLocation.getValue()) {
      case "Oceania": return GeoLocation.OCEANIA;
      case "Middle East": return GeoLocation.MIDDLE_EAST;
      case "Europe": return GeoLocation.EUROPE;
      case "Caribbean": return GeoLocation.CARIBBEAN;
      case "Asia": return GeoLocation.ASIA;
      case "America": return GeoLocation.AMERICA;
      case "Africa": return GeoLocation.AFRICA;
      default: return GeoLocation.INCONNU;
    }
  }
}
