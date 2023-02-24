
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiAuthService } from '../auth/services/api-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate{

  constructor(private apiAuthService: ApiAuthService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean > | boolean  {

        console.log("Can activate");
        
    return this.apiAuthService.refresh().pipe(
      tap( resp =>{
        if (!resp){
          this.router.navigate(["/auth"])
        }
      })
    );

    
  }
}
