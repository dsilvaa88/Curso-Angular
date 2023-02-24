package cl.genchi.wiki.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import java.util.Date;
import java.util.List;
  



@Entity
@Table(name = "Sistemas")
public class Sistema {
	
	
	//DELETE INSERTAR MODIFICAR Y BUSCAR POR ID
	@Id
	private String id;
	
	@Column(nullable=false)
	private String nombre;
	
	@Column(nullable=false,length = 1200)
	private String descripcion;
	
	@Column(nullable=false)
	private String version;
	
	@Column(nullable=false)
	private String tecnologia;
	
	@Column(nullable=false)
	@Temporal(TemporalType.DATE)
	private Date fechaCreacion;

	@Column(nullable=true)
	@Temporal(TemporalType.DATE)
	private Date fechaModificacion;

	@OneToMany (mappedBy = "sistema", fetch = FetchType.LAZY, cascade = CascadeType.ALL)//cascada para que los cambios en cascada
	private List<Historial> historial;
	

	public String getId() {
		return id;
	}

	public Date getFechaCreacion() {
		return fechaCreacion;
	}

	public void setFechaCreacion(Date fechaCreacion) {
		this.fechaCreacion = fechaCreacion;
	}

	public Date getFechaModificacion() {
		return fechaModificacion;
	}

	public void setFechaModificacion(Date fechaModificacion) {
		this.fechaModificacion = fechaModificacion;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public String getVersion() {
		return version;
	}

	public void setVersion(String version) {
		this.version = version;
	}

	public String getTecnologia() {
		return tecnologia;
	}

	public void setTecnologia(String tecnologia) {
		this.tecnologia = tecnologia;
	}
	
	
	
}    

