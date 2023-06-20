package com.iut.uca.enums;
/**
 * List of the geolocation for animals
 */
public enum GeoLocation {
  OCEANIA("OCEANIA"),
  MIDDLE_EAST("MIDDLE_EAST"),
  EUROPE("EUROPE"),
  CARIBBEAN("CARIBBEAN"),
  ASIA("ASIA"),
  AMERICA("AMERICA"),
  AFRICA("AFRICA"),
  INCONNU("INCONNU");


  private String value;

  GeoLocation(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  public void setValue(String value) {
    this.value = value;
  }
}
