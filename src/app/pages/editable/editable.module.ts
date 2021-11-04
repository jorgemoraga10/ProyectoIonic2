import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditablePageRoutingModule } from './editable-routing.module';

import { EditablePage } from './editable.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EditablePageRoutingModule
  ],
  declarations: [EditablePage]
})
export class EditablePageModule {}
