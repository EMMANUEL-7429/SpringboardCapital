import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';


@Component({
  selector: 'app-payslip',
  templateUrl: './pay-slip.component.html',
  styleUrls: ['./pay-slip.component.scss']
})
export class PayslipComponent {
  IsNodeLoading: boolean = false;
  selectedPeriod: string = '';
  excelFormat: boolean = false;

  constructor() {}

  // Method to handle form submission and generate an Excel payslip
  generatePayslip() {
    if (this.selectedPeriod) {
      console.log('Generating payslip for period:', this.selectedPeriod);
      console.log('Excel format:', this.excelFormat);

      if (this.excelFormat) {
        this.generateExcelPayslip();
      } else {
        // Handle other formats if needed
        console.log('Generate non-Excel format');
      }
    } else {
      console.log('Please select a period.');
    }
  }

  // Method to generate an Excel file
  generateExcelPayslip() {
    // Create an empty workbook and worksheet
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet([]);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Payslip');

    // Specify filename
    const filename = `Payslip_${this.selectedPeriod}.xlsx`;

    // Generate Excel file and trigger download
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([wbout], { type: 'application/octet-stream' });
    FileSaver.saveAs(blob, filename);

    console.log('Excel payslip generated.');
  }
}
