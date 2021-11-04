import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {MatSliderModule} from '@angular/material/slider'; 

import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { CuentaComponent } from 'src/app/Components/cuenta/cuenta.component';
import { SoporteComponent } from 'src/app/Components/soporte/soporte.component';
import { ViajeComponent } from 'src/app/Components/viaje/viaje.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HomePageRoutingModule,
    MatSliderModule
  ],
  declarations: [HomePage, CuentaComponent, SoporteComponent, ViajeComponent]
})
export class HomePageModule {}
