package cl.genchi.wiki.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cl.genchi.wiki.dto.request.NuevoSistemaDTO;
import cl.genchi.wiki.dto.response.SistemaRequestDTO;
import cl.genchi.wiki.dto.response.TituloSistemaDTO;
import cl.genchi.wiki.entity.Sistema;
import cl.genchi.wiki.service.ISistemaService;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins={"http://localhost:4200", "url.produccion"})
public class SistemaController {
	
	@Autowired
	ISistemaService sistemaService;
	
	@GetMapping("/traerSistemas")
	public ResponseEntity<List<SistemaRequestDTO>> traerSistemas(){
		return sistemaService.traerSistemas();
	}
	
    @DeleteMapping(value = "/borrarSistema/{id}")
    public ResponseEntity<?> borrarSistema(@PathVariable String id) {
    	return sistemaService.borrarSistema(id);
        
    }
    @PostMapping("/guardarSistema")
    public ResponseEntity<?> guardarSistema(@Valid @RequestBody NuevoSistemaDTO sistemaDTO, BindingResult result) {
    	return sistemaService.guardarSistema(sistemaDTO, result);
    }
    
    @PutMapping("/modificarSistema/{id}")
    public ResponseEntity<?> modificarSistema(@Valid @PathVariable String id, @RequestBody NuevoSistemaDTO sistemaDTO, BindingResult result){
    	return sistemaService.modificarSistema(sistemaDTO, id,result);
    }
    
    @GetMapping("/encontrar/{id}")
    public ResponseEntity<Sistema> encontrar(@PathVariable String id){
    	return sistemaService.encontrar(id);
    }
    
    @GetMapping("/traerTitulosSistemas")
	public ResponseEntity<List<TituloSistemaDTO>> traerTitulosSistemas(){
		return sistemaService.traerTitulosSistemas();
	}
    
    
    
}
