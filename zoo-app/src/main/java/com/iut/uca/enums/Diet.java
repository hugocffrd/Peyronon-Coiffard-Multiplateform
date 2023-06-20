package com.iut.uca.enums;

/**
 * List of the diet for animals
 */
public enum Diet {
  CARNIVORE("CARNIVORE"),
  HERBIVORE("HERBIVORE"),
  OMNIVORE("OMNIVORE"),
  INSECTIVORE("INSECTIVORE"),
  INCONNU("INCONNU");

  private String value;

   Diet(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  public void setValue(String value) {
    this.value = value;
  }
}
