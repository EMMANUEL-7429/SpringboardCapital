import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayslipRoutingModule } from './payslip-routing.module';
import { PaySlipComponent } from '../pay-slip/pay-slip.component';


@NgModule({
  declarations: [
    PaySlipComponent
  ],
  imports: [
    CommonModule,
    PayslipRoutingModule
  ]
})
export class PayslipModule { }
