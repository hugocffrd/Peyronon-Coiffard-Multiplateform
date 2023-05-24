package com.iut.uca.repositories;

import com.iut.uca.repositories.entity.UserEntity;
import java.util.List;
import org.bson.types.ObjectId;

public interface IRepository<T> {

  T insert(T entity);


  List<T> list();
  T update(ObjectId id);
  void delete(ObjectId id);
}
