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

@Component({
  selector: 'app-p9',
  templateUrl: './p9.component.html',
  styleUrls: ['./p9.component.scss']
})
export class P9Component implements OnInit {
  IsNodeLoading: boolean=false;
  years: number[] = [];
  selectedYear: number;
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

  generateP9(): void {
    console.log('Generating P9 for year:', this.selectedYear, 'with Excel format:', this.excelFormat);
  }
}



