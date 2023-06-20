package com.iut.uca.repositories;

import com.mongodb.client.MongoCollection;
import java.util.List;

/**
 * @param <T> Entity used
 */
public interface IRepository<T> {

  /**
   * Get the collection of the entity
   * @return the collection
   */
  MongoCollection<T> getCollection();

  /**
   * Insert the entity in database
   * @param entity to insert
   * @return entity inserted
   */
  T insert(T entity);

  /**
   * Get the entity in database
   * @param id to get
   * @return entity get
   */
  T get(String id);

  /**
   * Get all entities in database
   * @return entities get
   */
  List<T> list();

  /**
   * Update entity
   * @param id of entity to update
   * @param entity new value
   * @return entity updated
   */
  T update(String id, T entity);

  /**
   * Delete Entity
   * @param id to delete
   */
  void delete(String id);
}
