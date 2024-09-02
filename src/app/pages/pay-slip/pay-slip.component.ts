import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/compiler/src/core';
@Component({
  selector: 'app-payslip',
  templateUrl: './pay-slip.component.html',
  styleUrls: ['./pay-slip.component.scss']
})
export class PayslipComponent {
  IsNodeLoading: boolean=false;
  selectedPeriod: string = '';
  //excelFormat: boolean = false;
  excelFormat: boolean = false;

  constructor() {}

  // Method to handle form submission
  generatePayslip() {
    if (this.selectedPeriod) {
      // Placeholder logic for generating the payslip
      console.log('Generating payslip for period:', this.selectedPeriod);
      console.log('Excel format:', this.excelFormat);

      // Add actual logic for generating the payslip here
    } else {
      // Handle case where no period is selected
      console.log('Please select a period.');
    }
  }
  
}
