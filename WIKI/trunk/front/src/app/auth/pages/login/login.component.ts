import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiAuthService } from '../../services/api-auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService,]
})
export class LoginComponent implements OnInit {

    miFormulario: FormGroup = this.fb.group({
      username: [ , [Validators.required, Validators.minLength(3)] ],
      password: [ , [Validators.required, Validators.minLength(3)] ],
  })

  logeo=false;
  loader=false;

  constructor(private router: Router, 
              private apiAuthService : ApiAuthService, 
              private fb: FormBuilder,
              private messageService: MessageService
               ) { }

  ngOnInit() {
  }

  login(){
    // const {username, password}= this.miFormulario.value;
   
    const usuario = this.miFormulario.controls["username"].value;
    const pass = this.miFormulario.controls["password"].value;

    this.loader=true;

    this.apiAuthService.login(usuario, pass).subscribe( resp=>{
      console.log(resp);
      if (resp ){
        console.log("usuario correcto");
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Usuario Correcto', life: 3000});
        this.router.navigate(["/admin"]);
      }else{
        console.log("usuario incorrecto");
        this.messageService.add({severity:'error', summary: 'Error', detail: 'Usuario o clave incorrecta', life: 3000});
      }
      this.loader=false;
    })
  }

  volver(){
    this.router.navigate(["/wiki"]);
  }

}
