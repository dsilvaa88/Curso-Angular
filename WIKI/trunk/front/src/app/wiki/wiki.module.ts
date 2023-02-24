import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLayoutModule } from '../layout/app.layout.module';
import { FormsModule } from '@angular/forms';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { WikiRoutingModule } from './wiki-routing.module';

import { SistemaComponent } from './pages/sistema/sistema.component';
import { PrincipalComponent } from './pages/principal/principal.component';



@NgModule({
  declarations: [
    SistemaComponent,
    PrincipalComponent,
  
  ],
  imports: [
    AppLayoutModule,
    CommonModule,
    FormsModule,
    PrimeNgModule,
    WikiRoutingModule,

  ],
  
})
export class WikiModule { }
