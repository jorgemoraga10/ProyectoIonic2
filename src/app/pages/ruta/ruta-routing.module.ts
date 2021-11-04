import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PruebaGuard } from 'src/app/guards/prueba.guard';

import { RutaPage } from './ruta.page';

const routes: Routes = [
  {
    path: '',
    canActivate: [PruebaGuard],
    component: RutaPage,
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RutaPageRoutingModule {}
