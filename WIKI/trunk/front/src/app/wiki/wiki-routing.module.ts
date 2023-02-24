import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from '../layout/app.layout.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { SistemaComponent } from './pages/sistema/sistema.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,

    children:[
      {
        path: 'principal', component: PrincipalComponent,
      },
      {
        path: 'sistema/:id', component: SistemaComponent,
      },
      {
        path: '**', redirectTo: "principal",
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WikiRoutingModule { }
