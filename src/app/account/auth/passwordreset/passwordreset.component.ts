import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthenticationService } from '../../../core/services/auth.service';
import { environment } from '../../../../environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-passwordreset',
  templateUrl: './passwordreset.component.html',
  styleUrls: ['./passwordreset.component.scss']
})

/**
 * Reset-password component
 */
export class PasswordresetComponent implements OnInit, AfterViewInit {

  resetForm: FormGroup;
  submitted = false;
  error = '';
  success = '';
  loading = false;
  correctOtp= '';

  // set the currenr year
  year: number = new Date().getFullYear();

  // tslint:disable-next-line: max-line-length
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit() {

    this.resetForm = this.formBuilder.group({
      otp: ['', [Validators.required, Validators.email]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngAfterViewInit() {
  }

  // convenience getter for easy access to form fields
  get f() { return this.resetForm.controls; }

  /**
   * On submit form
   */
  onSubmit() {
    this.success = '';
    this.submitted = true;

    // stop here if form is invalid
    if (this.resetForm.invalid) {
      return;
    }
    if (environment.defaultauth === 'firebase') {
      this.authenticationService.resetPassword(this.f.email.value)
        .catch(error => {
          this.error = error ? error : '';
        });
    }
  }

  verifyOtp(){
    this.submitted = true;
    this.error = '';
    this.success = '';


    if (this.resetForm.invalid) {
      return;
    }

    if (!this.resetForm.value.otp) {
      this.error = 'Please enter the OTP.';
      setTimeout(() => {
        this.error = '';
      }, 2000);
    } else if (this.resetForm.value.otp !== this.correctOtp) {
      this.error = 'Incorrect OTP. Please try again.';
      setTimeout(() => {
        this.error = '';
      }, 2000);
    } else {
      this.success = 'OTP verified successfully';
      setTimeout(() => {
        this.success = '';
      }, 2000);
    }

  }

  resendCode() {
    this.success = 'Code sent to Email';
    setTimeout(() => {
      this.success = '';
    }, 2000); // Message disappears after 2 seconds
  }
}
