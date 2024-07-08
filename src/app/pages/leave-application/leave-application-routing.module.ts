import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaveApplicationComponent } from './leave-application/leave-application.component';

const routes: Routes = [
  {
    path: "LeaveApplication",
    children: [
      { path: "", component: LeaveApplicationComponent },
      { path: "edit/:id", component: LeaveApplicationComponent },
    ],
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaveApplicationRoutingModule { }
