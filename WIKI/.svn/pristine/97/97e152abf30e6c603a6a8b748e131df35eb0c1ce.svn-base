import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Nasa } from '../interfaces/nasa.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiNasaService {

  constructor(private http:HttpClient) { }


  obtenerDatosNasa():Observable<Nasa>{

    return this.http.get<Nasa>('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
  }

}
