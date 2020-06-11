import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErreurComponent } from './erreur/erreur.component';


const routes: Routes = [{ path: '404', loadChildren: () => import('./erreur/erreur.module').then(m => m.ErreurModule) }, 
{ path: 'Cars', loadChildren: () => import('./cars/cars.module').then(m => m.CarsModule) }, 
{ path: 'CarDetails', loadChildren: () => import('./car-details/car-details.module').then(m => m.CarDetailsModule) },
{
  path:"**",
  redirectTo:"Cars"
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
