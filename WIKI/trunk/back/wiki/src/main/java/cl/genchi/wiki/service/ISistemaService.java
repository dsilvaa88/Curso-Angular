package cl.genchi.wiki.service;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;

import cl.genchi.wiki.dto.request.NuevoSistemaDTO;
import cl.genchi.wiki.dto.response.SistemaRequestDTO;
import cl.genchi.wiki.dto.response.TituloSistemaDTO;
import cl.genchi.wiki.entity.Sistema;

public interface ISistemaService {
	public ResponseEntity<List<SistemaRequestDTO>>traerSistemas();
		
	public ResponseEntity<?> guardarSistema(NuevoSistemaDTO sistemaDTO, BindingResult result);
	
	public ResponseEntity<?> borrarSistema(String id);
	
	public ResponseEntity<?> modificarSistema(NuevoSistemaDTO sistemaDTO, String id,  BindingResult result);
	
	public ResponseEntity<Sistema> encontrar( String id);
	
	public ResponseEntity<List<TituloSistemaDTO>>traerTitulosSistemas();
}
