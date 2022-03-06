import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarComponent } from './pages/editar/editar.component';
import { ExperienciasComponent } from './pages/experiencias/experiencias.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NoExisteComponent } from './pages/no-existe/no-existe.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  {path:'', pathMatch: 'full', component: InicioComponent  },
  {path:'editar', component: EditarComponent},
  {path:'proyectos', component: ProyectosComponent},
  {path:'experiencia', component: ExperienciasComponent},
  {path:'registro', component: RegistroComponent},
  {path:'**', component: NoExisteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
