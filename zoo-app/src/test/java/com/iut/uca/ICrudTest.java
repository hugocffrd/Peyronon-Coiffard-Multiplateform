package com.iut.uca;

/**
 * Interface for testing crud for Animal, User and Cagnote
 */
public interface ICrudTest {

  /**
   * Set up the context
   */
  void setup();

  /**
   * Test get one method
   */
  void testGetOne();
  /**
   * Test get all method
   */
  void testGetAll();
  /**
   * Test add method
   */
  void testAdd();
  /**
   * Test update method
   */
  void testUpdate();
  /**
   * Test delete method
   */
  void testDelete();
}
