import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora';
  tituloLog="Registro de Usuario"
  n1: number = 0;
  n2: number = 0;
  resultado: number=0;

  sumar(){
    this.resultado=this.n1+this.n2;
  }
  restar(){
    this.resultado=this.n1-this.n2;
  }
  multiplicar(){
    this.resultado=this.n1*this.n2;
  }
  dividir(){
    this.resultado=this.n1/this.n2;
  }

  registrarUsu(){
    this.registrado=true;
    this.mensaje="se ha registrado con éxito y su cargo es: "
  }
  mensaje="";
  registrado=false;
  usu:string="";
  pass:string="";
  cargo:string="";

  entradas: any;

  constructor(){
    this.entradas=[
      {titulo:"Python está cada día más presente. "},
      {titulo:"Java presente hace más de 20 años. "},
      {titulo:"JavaScript cada vez más funcional. "},
    ]
  }

}
