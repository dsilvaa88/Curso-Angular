import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoHijoComponentComponent } from './empleado-hijo-component/empleado-hijo-component.component';
import { CaracsEmpleadoCComponent } from './caracs-empleado-c/caracs-empleado-c.component';


@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoComponentComponent,
    CaracsEmpleadoCComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
