import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpinionsPageRoutingModule } from './opinions-routing.module';

import { OpinionsPage } from './opinions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    OpinionsPageRoutingModule
  ],
  declarations: [OpinionsPage]
})
export class OpinionsPageModule {}
