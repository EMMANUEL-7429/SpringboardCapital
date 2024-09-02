import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../core/services/auth.service';
import { AuthfakeauthenticationService } from '../../../core/services/authfake.service';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  otpForm: FormGroup;
  submitted = false;
  error = '';
  returnUrl: string;
  showPassword = false;
  isOtpStep = false;

  // Hardcoded credentials and OTP
  hardcodedEmployeeNo = '7429';
  hardcodedPassword = '123456';
  hardcodedOtp = '2022';



  year: number = new Date().getFullYear();

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private authFackservice: AuthfakeauthenticationService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [this.hardcodedEmployeeNo, [Validators.required]],
      password: [this.hardcodedPassword, [Validators.required]],

    });

    this.otpForm = this.formBuilder.group({
      otp: ['', [Validators.required]]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.loginForm.controls; }
  get o() { return this.otpForm.controls; }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  // onSubmit(){}

  onSubmit() {
    this.submitted = true;
    this.error = ''; // Reset error message
  
    if (this.isOtpStep) {
      if (this.otpForm.invalid) {
        return;
      }
      if (this.otpForm.value.otp === this.hardcodedOtp) {
        localStorage.setItem('employeeNo', this.hardcodedEmployeeNo);
        this.router.navigate(['/dashboard']);
      } else {
        this.error = 'Invalid OTP';
      }
    } else {
      if (this.loginForm.invalid) {
        return;
      }
      if (this.f.email.value === this.hardcodedEmployeeNo && this.f.password.value === this.hardcodedPassword) {
        this.isOtpStep = true; // Proceed to OTP step
        this.submitted = false; // Reset submission status for OTP step
      } else {
        this.error = 'Invalid employee number or password';
      }
    }
  }
  

  // timer() {
  //   let timerInterval;
  //   Swal.fire({
  //     timer: 1000,
  //     didOpen: () => {
  //       Swal.showLoading();
  //       timerInterval = setInterval(() => {
  //         const content = Swal.getHtmlContainer();
  //         if (content) {
  //           const b = content.querySelector('b');
  //           if (b) {
  //             b.textContent = Swal.getTimerLeft() + '';
  //           }
  //         }
  //       }, 0);
  //     },
  //     willClose: () => {
  //       clearInterval(timerInterval);
  //     }
  //   }).then((result) => {
  //     if (result.dismiss === Swal.DismissReason.timer) {
  //       console.log('I was closed by the timer');
  //     }
  //   });
  // }
  timer(){}

  activateAccount() {
    this.router.navigate(['/account/login-2']);
  }
  verifyOtp() {
    this.submitted = true;
  
    if (this.otpForm.invalid) {
      return;
    } else {
      if (this.otpForm.value.otp === this.hardcodedOtp) {
        console.log(this.otpForm.value.otp)
       // localStorage.setItem('employeeNo', this.hardcodedEmployeeNo); // Store employee number in localStorage
        this.router.navigate(['/dashboard']); // Navigate to dashboard
       // console.log("redirecting...")
        //this.router.navigate(['']);
      } else {
        console.log("routing failed")
        this.error = 'Invalid OTP'; // Show an error if OTP is incorrect
      }
    }
  }
  
 /* signIn(){
    this.router.navigate['/account/reset-password']
  } */
  forgotPassword(){
    this.router.navigate(['/account/reset-password']);
  }
    
}
