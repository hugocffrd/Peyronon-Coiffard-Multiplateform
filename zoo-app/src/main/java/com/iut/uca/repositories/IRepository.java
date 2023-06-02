package com.iut.uca.repositories;

import com.mongodb.client.MongoCollection;
import java.util.List;

/**
 * @param <T> Entity used
 */
public interface IRepository<T> {

  MongoCollection<T> getCollection();
  T insert(T entity);
  T get(String id);
  List<T> list();
  T update(String id, T entity);
  void delete(String id);
}
