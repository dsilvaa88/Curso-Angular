package cl.genchi.wiki.dao;



import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import cl.genchi.wiki.dto.response.SistemaRequestDTO;
import cl.genchi.wiki.dto.response.TituloSistemaDTO;
import cl.genchi.wiki.entity.Sistema;

public interface ISistemasDao extends CrudRepository<Sistema, String> {//centralizar la responsabilidad al acceso de la DB
	
	/*
	@Query( value="select * from sistemas s order by s.nombre", nativeQuery = true )
	List<Sistema> findAllOrdernado();
	*/
	

	@Query( value="select new cl.genchi.wiki.dto.response.TituloSistemaDTO(s.id, s.nombre) from Sistema s order by s.nombre")
	List<TituloSistemaDTO> findAllTituloSistemaDTO();
	
	@Query( value="select new cl.genchi.wiki.dto.response.TituloSistemaDTO(s.id, s.nombre, s.descripcion, s.version, s.tecnologia, TO_CHAR(s.fechaCreacion),"
			+ " TO_CHAR(s.fechaModificacion)) from Sistema s order by s.nombre", nativeQuery = true)
	List<SistemaRequestDTO> findByIdSistemaDTO();
}
