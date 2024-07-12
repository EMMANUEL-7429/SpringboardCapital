import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

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
  leaveTypes: any[] = ['Annual', 'Sick', 'Maternity'];
  relievers: any[] = ['Colleague', 'Supervisor', 'Temporary Replacement', 'Automated System', 'Manager or Team Lead'];
  formSubmitted = false;
  modalRef: NgbModalRef | null = null;


  constructor(private modalService: NgbModal, private fb: FormBuilder) {
    this.leaveApplicationForm = this.fb.group({
      applicationCode: [''],
      applicationStaffNo: [''],
      names: [''],
      leaveType: ['', Validators.required],
      daysApplied: ['', Validators.required],
      startDate: ['', Validators.required],
      returnDate: [''],
      leavePurpose: ['', Validators.required],
      supervisorComments: [''],
      hodComments: [''],
      reliever: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  search(): void {
  }

  openNewApplicationModal(content: TemplateRef<any>): void {
    this.modalRef = this.modalService.open(content, { size: 'xl', centered: true });
  }

  onSubmit() {
    if (this.leaveApplicationForm.valid) {
      let status = 'Awaiting Approval'; // Default status
      //const randomApproval = Math.random(); // Random number to simulate approval
      //if (randomApproval > 0.5) {
        //status = 'Approved';
      //} else {
       // status = 'Denied';
      //}
  
      const newApplication = {
        ...this.leaveApplicationForm.value,
        status: status,
        applicationDate: new Date().toLocaleDateString(),
        days: this.leaveApplicationForm.value.daysApplied || 'N/A',
        returnDate: this.leaveApplicationForm.value.returnDate || 'N/A'
      };
  
      this.leaveApplications.push(newApplication);
      this.formSubmitted = true;
      Swal.fire('Success', 'Application Successful!', 'success');
  
      setTimeout(() => {
        this.formSubmitted = false;
        if (this.modalRef) {
          this.modalRef.close();
          this.modalRef = null;
        }
      }, 2000);
    } else {
      Swal.fire('Error', 'Form is invalid. Please check all fields.', 'error');
      console.log('Form is invalid. Please check all fields.');
      this.checkFormValidity(this.leaveApplicationForm);
    }
  }
  

  checkFormValidity(form: FormGroup) {
    Object.keys(form.controls).forEach(key => {
      const control = form.get(key);
      if (control && control.invalid) {
        console.log(`Control ${key} is invalid:`, control.errors);
      }
    });
  }
  successmsg() {
    Swal.fire('Success','Application successfully!','success');
    console.log('Form successfully submitted!');

  }
}
