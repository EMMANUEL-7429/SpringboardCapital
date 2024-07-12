import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  years: number[] = [];
  selectedYear: number;
  excelFormat: boolean = false;

  // breadcrumb items
  breadCrumbItems: Array<{ label: string, active?: boolean }> = [];

  constructor() { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: 'Projects' },
      { label: 'Projects Overview', active: true }
    ];

    // Initialize years with a range of sample years
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= currentYear - 10; year--) {
      this.years.push(year);
    }
  }

  generateP9(): void {
    // Implement your logic to generate the P9
    console.log('Generating P9 for year:', this.selectedYear, 'with Excel format:', this.excelFormat);
  }
}
