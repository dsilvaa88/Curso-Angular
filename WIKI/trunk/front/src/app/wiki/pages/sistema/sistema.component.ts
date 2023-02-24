import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiSistemasService } from '../../services/api-sistemas.service';
import { Sistema } from '../../interfaces/sistema.interface';

@Component({
  selector: 'app-sistema',
  templateUrl: './sistema.component.html',
  styleUrls: ['./sistema.component.scss']
})
export class SistemaComponent implements OnInit {
  datosSistema!: Sistema;
  

  constructor(private apiSistemaService: ApiSistemasService, private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.rutaActiva.params.subscribe( (parametros:any)  =>{
      if(parametros.id){     
        this.buscarSistemaPorId(parametros.id)
      }
    })
  }

  buscarSistemaPorId(id: string ){
    console.log({id});
    
    this.apiSistemaService.obtenerDatosSistema(id).subscribe(resp =>{

      this.datosSistema = resp;

      this.datosSistema.nombre;
    });
    
    

  }


}
