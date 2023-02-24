package cl.genchi.wiki.dao;

import org.springframework.data.repository.CrudRepository;

import cl.genchi.wiki.entity.Historial;

public interface IHistorialDao extends CrudRepository<Historial, String> {
	
	
}
