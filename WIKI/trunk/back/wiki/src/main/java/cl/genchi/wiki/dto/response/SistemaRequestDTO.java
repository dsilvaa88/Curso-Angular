package cl.genchi.wiki.dto.response;


public class SistemaRequestDTO {
	private String id;
	private String nombre;
	private String descripcion;
	private String version;
	private String tecnologia;
	private String fechaCreacion;
	private String fechaModificacion;
	
	public SistemaRequestDTO() {};
	public SistemaRequestDTO(String id, String nombre, String descripcion, String version, String tecnologia,
			String fechaCreacion, String fechaModificacion) {
		this.id = id;
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.version = version;
		this.tecnologia = tecnologia;
		this.fechaCreacion = fechaCreacion;
		this.fechaModificacion = fechaModificacion;
	}
	public String getId() {
		return id;
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
	public String getFechaCreacion() {
		return fechaCreacion;
	}
	public void setFechaCreacion(String fechaCreacion) {
		this.fechaCreacion = fechaCreacion;
	}
	public String getFechaModificacion() {
		return fechaModificacion;
	}
	public void setFechaModificacion(String fechaModificacion) {
		this.fechaModificacion = fechaModificacion;
	}
	
	
	
}
