import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(mod => mod.HomeModule)
    },
    {
        path: 'admin',
        loadChildren: () => import('./pages/admin/admin.module').then(mod => mod.AdminModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
