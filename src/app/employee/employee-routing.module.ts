import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddEditComponent } from './add-edit/add-edit.component';


const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    children: [
      {
        path: 'add',
        component: AddEditComponent
      },
      {
        path: ':id',
        component: AddEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
