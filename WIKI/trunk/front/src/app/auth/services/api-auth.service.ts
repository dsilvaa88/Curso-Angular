import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Buffer } from 'buffer';
import { Observable, of } from 'rxjs';
import { Oauth } from '../interfaces/oauth.interface';
import { tap, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiAuthService {

  private baseUrl :string = environment.baseUrl;
  private userCliente :string = environment.userCliente;
  private passCliente :string = environment.passCliente;
  private credencialesClienteBase64 :string  = Buffer.from(`${this.userCliente}:${this.passCliente}`).toString('base64');

  constructor(private http:HttpClient) { }

  
  private headers = new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .set('Authorization', 'Basic '+ this.credencialesClienteBase64);


  login(username:string, password:string) : Observable<any>{

    let params = new URLSearchParams();
    params.set('grant_type', 'password');
    params.set('username',  username);
    params.set('password', password);

    return this.http.post<Oauth>(`${this.baseUrl}/oauth/token`,params.toString(),
              { headers: this.headers }
            ).pipe(
              tap( (resp) =>{
                localStorage.setItem("access_token", resp.access_token);
                localStorage.setItem("refresh_token", resp.refresh_token);
              }),
              map( resp => of(true)),
              catchError(resp => {
                localStorage.removeItem("access_token");
                localStorage.removeItem("refresh_token");
                return of(false)
                
              })

            );

  }

  refresh():Observable<boolean>{

    let tokenRefresh = localStorage.getItem("refresh_token") || '';

    let params = new URLSearchParams();
    params.set('grant_type', 'refresh_token');
    params.set('refresh_token',  tokenRefresh);

    return this.http.post<Oauth>(`${this.baseUrl}/oauth/token`,params.toString(),
              { headers: this.headers }
            ).pipe(
              map( resp =>{
                localStorage.setItem("access_token", resp.access_token);
                localStorage.setItem("refresh_token", resp.refresh_token);
                return true
              }),
              catchError( resp => {
                localStorage.removeItem("access_token");
                localStorage.removeItem("refresh_token");
                return of(false);
              })
            );

  }
}
