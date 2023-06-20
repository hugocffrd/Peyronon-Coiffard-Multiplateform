package com.iut.uca.mapper;

/**
 * @param <D> DTO
 * @param <E> Entity
 */
public interface IMapper<D,E> {

  /**
   * Map the entity to DTO
   * @param entity to convert in DTO
   * @return DTO mapped returned
   */
  D mapDto(E entity);

  /**
   * Map the DTO to entity
   * @param dto to convert in entity
   * @return entity mapped returned
   */
  E mapEntity(D dto);


}
