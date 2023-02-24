import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { RetornoNuevoInterface } from 'src/app/admin/interfaces/retornoNuevo.interface';
import { environment } from 'src/environments/environment';
import { Sistema } from '../interfaces/sistema.interface';
import { TituloSistemas } from '../interfaces/tituloSistemas.interface';


@Injectable({
  providedIn: 'root'
})
export class ApiSistemasService {

  access_token: string = localStorage.getItem("access_token") || "";
  baseUrl :string = environment.baseUrl;
  headers =new HttpHeaders().set("Authorization","Bearer " +this.access_token);

  constructor(private http:HttpClient) { }


  obtenerDatosSistema(id: string):Observable<Sistema>{
    return this.http.get<Sistema>(`${this.baseUrl}/api/encontrar/${id}`);
  }

  obtenerTituloSistemas():Observable<TituloSistemas[]>{
    return this.http.get<TituloSistemas[]>(`${this.baseUrl}/api/traerTitulosSistemas`);
  }

  mapearSistemas():Observable<Sistema[]>{
    return this.http.get<Sistema[]>(`${this.baseUrl}/api/traerSistemas`);
  }

  agregarSistema(sistema: Sistema):Observable<RetornoNuevoInterface>{
    return this.http.post<RetornoNuevoInterface>(`${this.baseUrl}/api/guardarSistema`,sistema,{
      headers : this.headers
    });
  }

  eliminarSistema(id: any){
    return this.http.delete(`${this.baseUrl}/api/borrarSistema/${id}`,{
      headers : this.headers
    });
  }


  modificarSistema(id:any, sistema: Sistema):Observable<Sistema>{
    return this.http.put<Sistema>(`${this.baseUrl}/api/modificarSistema/${id}`,sistema,{
      headers : this.headers
    });
  }

}
