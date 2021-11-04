import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PruebaGuard } from 'src/app/guards/prueba.guard';

import { OpinionsPage } from './opinions.page';

const routes: Routes = [
  {
    path: '',
    component: OpinionsPage,
    canActivate: [PruebaGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpinionsPageRoutingModule {}
