import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuentaComponent } from 'src/app/Components/cuenta/cuenta.component';
import { SoporteComponent } from 'src/app/Components/soporte/soporte.component';
import { ViajeComponent } from 'src/app/Components/viaje/viaje.component';
import { PruebaGuard } from 'src/app/guards/prueba.guard';
import { HomePage } from './home.page';


const routes: Routes = [
  {
    path: '',
    component: HomePage,
    canActivate: [PruebaGuard],
    children:[
      {
        path: 'viaje',
        component: ViajeComponent
      },
      {
        path: 'cuenta',
        component: CuentaComponent
      },
      {
        path: 'soporte',
        component: SoporteComponent
      },
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
