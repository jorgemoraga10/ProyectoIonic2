import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditablePage } from './editable.page';

const routes: Routes = [
  {
    path: '',
    component: EditablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditablePageRoutingModule {}
