package com.iut.uca.mapper;

/**
 * @param <D> DTO
 * @param <E> Entity
 */
public interface IMapper<D,E> {

  D mapDto(E entity);
  E mapEntity(D dto);

  D newInstanceDto();
  E newInstanceEntity();

}
