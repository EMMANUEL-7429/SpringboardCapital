/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p9',
  templateUrl: './p9.component.html',
  styleUrls: ['./p9.component.scss']
})
export class P9Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}*/

import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-p9',
  templateUrl: './p9.component.html',
  styleUrls: ['./p9.component.scss']
})
export class P9Component implements OnInit {
  IsNodeLoading: boolean=false;
  years: number[] = [];
  selectedYear: number | undefined;
  excelFormat: boolean = false;

  // breadcrumb items
  breadCrumbItems: Array<{ label: string, active?: boolean }> = [];

  constructor() { }

  ngOnInit(): void {

    // Initialize years with a range of sample years
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= currentYear - 10; year--) {
      this.years.push(year);
    }
  }

  generateP9() {
    if (this.selectedYear) {
      console.log('Generating payslip for period:', this.selectedYear);
      console.log('Excel format:', this.excelFormat);

      if (this.excelFormat) {
        this.generateExcelP9();
      } else {
        // Handle other formats if needed
        console.log('Generate non-Excel format');
      }
    } else {
      console.log('Please select a period.');
    }
  }

  // Method to generate an Excel file
  generateExcelP9() {
    // Create an empty workbook and worksheet
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet([]);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Payslip');

    // Specify filename
    const filename = `Payslip_${this.selectedYear}.xlsx`;

    // Generate Excel file and trigger download
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([wbout], { type: 'application/octet-stream' });
    FileSaver.saveAs(blob, filename);

    console.log('Excel payslip generated.');
  }
}



