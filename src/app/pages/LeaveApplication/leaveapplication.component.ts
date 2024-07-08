import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-leaveapplication',
  templateUrl: './leaveapplication.component.html',
  styleUrls: ['./leaveapplication.component.scss']
})
export class LeaveApplicationComponent implements OnInit {
  public loading: boolean = false;
  isNodeLoading: boolean = false;
  searchText: string = '';
  hodComments:string='';
  supervisorComments:string='';
  leaveApplications: any[] = []; // Data list
  leaveApplicationForm: FormGroup;
  Remarks: any="";


  constructor(private modalService: NgbModal, private fb: FormBuilder) {
    this.leaveApplicationForm = this.fb.group({
      leaveType: ['', Validators.required],
      applicationDate: ['', Validators.required],
      startDate: ['', Validators.required],
      days: ['', Validators.required],
      returnDate: ['', Validators.required],
      reliever: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Initialize with sample data if needed
  }

  search(): void {
    // Implement your search logic here if necessary
  }

  openNewApplicationModal(content: TemplateRef<any>): void {
    this.modalService.open(content, { size: 'xl', centered: true });
  }

  onSubmit() {
    if (this.leaveApplicationForm.valid) {
      // Here you can submit the form data to your backend or store it locally
      console.log(this.leaveApplicationForm.value);

      // Clear the form after submission if needed
      this.leaveApplicationForm.reset();
    }
  }
  successmsg(){}
}


