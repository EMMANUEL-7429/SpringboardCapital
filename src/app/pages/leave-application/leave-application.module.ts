import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaveApplicationRoutingModule } from './leave-application-routing.module';
import { LeaveApplicationComponent } from './leave-application/leave-application.component';


@NgModule({
  declarations: [
    LeaveApplicationComponent
  ],
  imports: [
    CommonModule,
    LeaveApplicationRoutingModule
  ]
})
export class LeaveApplicationModule { }
