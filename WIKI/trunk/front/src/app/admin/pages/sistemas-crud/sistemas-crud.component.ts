import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Params } from '@angular/router';
import { Sistema } from 'src/app/wiki/interfaces/sistema.interface';
import { ApiSistemasService } from 'src/app/wiki/services/api-sistemas.service';
import { Observable } from 'rxjs/internal/Observable';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-sistemas-crud',
  templateUrl: './sistemas-crud.component.html',
  styleUrls: ['./sistemas-crud.component.scss'],
  styles: [`
  :host ::ng-deep .p-dialog .product-image {
      width: 150px;
      margin: 0 auto 2rem auto;
      display: block;
    }
  `],
  providers: [MessageService,ConfirmationService]
})
export class SistemasCRUDComponent implements OnInit {

  
  miFormulario: FormGroup = this.fb.group({
    nombre: [ , [Validators.required, Validators.minLength(1)] ],
    descripcion: [ , [Validators.required, Validators.minLength(1)] ],
    version: [ , [Validators.required, Validators.minLength(1)] ],
    tecnologia: [ , [Validators.required, Validators.minLength(1)] ],
})


  sistemas: Sistema[] = [];

  sistema!: Sistema;

  sistemaDialogo!: boolean;

  enviado!: boolean;

  idd: string = "";

  tipoSubmit: string = "";
  constructor( private fb: FormBuilder, private apiSistemaService: ApiSistemasService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.apiSistemaService.mapearSistemas().subscribe(
      sistemas=>{
        this.sistemas=sistemas;
      }
    )
    
  }

  submit(sistema:Sistema){
    this.sistema = {};
    this.sistema.nombre=this.miFormulario.controls["nombre"].value;
    this.sistema.descripcion=this.miFormulario.controls["descripcion"].value;
    this.sistema.version=this.miFormulario.controls["version"].value;
    this.sistema.tecnologia=this.miFormulario.controls["tecnologia"].value;

    if(this.tipoSubmit=="nuevo"){
      this.apiSistemaService.agregarSistema(this.sistema).subscribe( resp =>{
        this.sistemas.push(resp.sistemaGuardado);
        this.sistemaDialogo=false;
        this.messageService.add({severity:'success', summary: 'Exitoso', detail: 'Sistema Creado', life: 3000});
      }
      )
    }
    if(this.tipoSubmit=="modificar"){
      console.log(sistema)
      this.apiSistemaService.modificarSistema(sistema.id,this.sistema).subscribe( resp =>{
        console.log(resp)
        const pos = this.sistemas.map(e => e.id).indexOf(sistema.id);
        this.sistemas[pos].nombre=resp.nombre;
        this.sistemas[pos].descripcion=resp.descripcion;
        this.sistemas[pos].version=resp.version;
        this.sistemas[pos].tecnologia=resp.tecnologia;
        console.log(this.sistemas[pos].tecnologia)
        this.sistemaDialogo=false;
        this.messageService.add({severity:'success', summary: 'Exitoso', detail: 'Sistema Modificado', life: 3000});
      }
      )
    }
    
  }

  abrirNuevo(){
    this.miFormulario.reset();
    this.tipoSubmit = "nuevo";
    this.sistema = {};
    this.enviado = false;
    this.sistemaDialogo = true;
  }

  editarSistema(sistema: Sistema){
    this.miFormulario.controls["nombre"].setValue(sistema.nombre);
    this.miFormulario.controls["descripcion"].setValue(sistema.descripcion);
    this.miFormulario.controls["version"].setValue(sistema.version);
    this.miFormulario.controls["tecnologia"].setValue(sistema.tecnologia);


    this.tipoSubmit = "modificar";
    this.sistema = {...sistema};
    this.sistemaDialogo = true;

  }

  eliminarSistema(sistema: Sistema){
    this.confirmationService.confirm({
      message: 'Estás seguro que deseas eliminar: ' + sistema.nombre + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.apiSistemaService.eliminarSistema(sistema.id).subscribe( 
          {
            next: resp =>{
              this.sistemas = this.sistemas.filter(val => val.id !== sistema.id);
              this.sistema = {};
              this.messageService.add({severity:'success', summary: 'Exitoso', detail: 'Sistema Borrado', life: 3000});
            },
            error: e =>{
              this.messageService.add({severity:'error', summary: 'Error', detail: 'Sistema No Borrado', life: 3000});
            }
          }
          )
      }
  });

  }


  esconderDialogo(){
    this.sistemaDialogo = false;
    this.enviado = false;
  }

  }


