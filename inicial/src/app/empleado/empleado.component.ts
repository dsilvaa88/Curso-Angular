import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.scss']
})
export class EmpleadoComponent implements OnInit {

  private nombre="Diego";
  apellido="Silva";
  edad=17;
  empresa="GENCHI";

  cambiaEmpresa(event:Event){
    this.empresa=(<HTMLInputElement>event.target).value 

  }
  getNombre(){
    return this.nombre;
  }

  llamaEmpresa(value:String){  
  }

  textoRegistro="No hay nadie registrado";

  getRegistroUsuario(){
    this.usuRegistrado=false;
  }
  usuRegistrado=false;
  habilitacionCuad=false;  

  setUsuarioRegistrado(event:Event){
    //alert("El usuario se acaba de registrar.");
    
    if((<HTMLInputElement>event.target).value=="si"){
      this.textoRegistro="El usuario se acaba de registrar";
    }
    else{
      this.textoRegistro="No hay nadie registrado";
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
