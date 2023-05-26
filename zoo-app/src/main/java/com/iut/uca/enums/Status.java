package com.iut.uca.enums;

public enum Status {
  ETEINT("ETEINT"),
  MENACE("MENACE"),
  PREO_MINEURE("PREO_MINEURE"),
  VIVANT("VIVANT"),
  INCONNU("INCONNU");

  private String value;
  Status(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  public void setValue(String value) {
    this.value = value;
  }
}
