import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.scss']
})
export class VistaComponent implements OnInit {

  constructor(public router: Router) { }

items!: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label:'Sistemas',
                icon:'pi pi-fw pi-file',
                routerLink:'sistemas_crud'
            },
            
            {
                label:'Users',
                icon:'pi pi-fw pi-user',
                routerLink:'usuario_crud'
                
            },

        ];
    }
    volver(){
      this.router.navigate(["/wiki"])
    }
}
  


