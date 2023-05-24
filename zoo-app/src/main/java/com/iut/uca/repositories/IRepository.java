package com.iut.uca.repositories;

import com.mongodb.client.MongoCollection;
import java.util.List;

/**
 * @param <T> Entity used
 */
public interface IRepository<T> {

  MongoCollection<T> getCollection();
  T insert(T entity);
  T get(long id);
  List<T> list();
  void update(long id, T entity);
  void delete(long id);
}
