import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../guards/admin.guard';
import { SistemasCRUDComponent } from './pages/sistemas-crud/sistemas-crud.component';
import { UsuariosCRUDComponent } from './pages/usuarios-crud/usuarios-crud.component';
import { VistaComponent } from './pages/vista/vista.component';

const routes: Routes = [

  {
    path: '',
    component: VistaComponent,

    children:[
      {
        path: 'sistema_crud', component: SistemasCRUDComponent,canActivate: [AdminGuard],
      },
      {
        path: 'usuario_crud', component: UsuariosCRUDComponent, canActivate: [AdminGuard],
      },
      {
        path: '**', redirectTo: "sistema_crud",
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
