import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateUpdateComponent } from './components/create-update/create-update.component';
import { ViewDeleteComponent } from './components/view-delete/view-delete.component';

const routes: Routes = [
  { path: '', component : ViewDeleteComponent},
  { path: 'new', component : CreateUpdateComponent},
  { path:':id', component : CreateUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
