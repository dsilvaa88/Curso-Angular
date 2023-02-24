import { Component } from '@angular/core';
import { Empleado } from './empleado.mode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ingresar un empleado';
  title2="Tabla de empleados";

  arrayEmpleados:Empleado[]=[
    new Empleado("Diego", "Silva", "Desarrollo de Software", 280000),
    new Empleado("Pepito", "Ronaldo", "Desarrollo de Software", 2280000),
    new Empleado("Juan", "Castillo", "Desarrollo de Software", 4280000),
    new Empleado("Renato", "Hernández", "Desarrollo de Software", 1280000)
  ]; //SE CREA UN ARRAY DE TIPO EMPLEADOS CON TODOS LOS EMPLEADOS

  agregarEmpleado(){
    let miEmpleado=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    this.arrayEmpleados.push(miEmpleado); 
  }
  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;
}
