import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p9',
  templateUrl: './p9.component.html',
  styleUrls: ['./p9.component.css']
})
export class P9Component implements OnInit {
  years: number[] = [];
  excelFormat: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.initializeYears();
  }

  // Initialize the years array with a range of years
  initializeYears() {
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= 2000; year--) {
      this.years.push(year);
    }
  }

  // Method to handle form submission
  generateP9() {
    const selectedYearElement = document.getElementById('year') as HTMLSelectElement;
    const selectedYear = selectedYearElement.value;
    this.excelFormat = (document.getElementById('excelFormat') as HTMLInputElement).checked;

    if (selectedYear) {
      // Placeholder logic for generating the P9
      console.log('Generating P9 for year:', selectedYear);
      console.log('Excel format:', this.excelFormat);

      // Add actual logic for generating the P9 here
    } else {
      // Handle case where no year is selected
      console.log('Please select a year.');
    }
  }
}
