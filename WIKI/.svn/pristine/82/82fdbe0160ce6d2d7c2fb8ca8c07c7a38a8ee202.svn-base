import { Component, OnInit } from '@angular/core';
import { Nasa } from '../../interfaces/nasa.interface';
import { ApiNasaService } from '../../services/api-nasa.service';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.scss']
})
export class Pagina2Component implements OnInit {

  datosNasa!: Nasa;

  constructor(private apiNasaService: ApiNasaService) { }

  ngOnInit(): void {
  }

  traerDatosNasa(){
    this.apiNasaService.obtenerDatosNasa().subscribe(resp =>{

      this.datosNasa = resp;

      this.datosNasa.title;

      console.log(this.datosNasa);
    });
  }

}
