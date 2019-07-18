import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearLigaComponent } from './crear-liga/crear-liga.component';


const routes: Routes = [
  {
    path: 'crear-liga',
    component: CrearLigaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
