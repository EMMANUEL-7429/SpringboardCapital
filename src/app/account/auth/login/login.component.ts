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
  hardcodedEmail = '7429';
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
      email: [this.hardcodedEmail, [Validators.required]],
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

  onSubmit() {
    this.submitted = true;

    if (this.isOtpStep) {
      if (this.otpForm.invalid) {
        return;
      } else {
        if (this.otpForm.value.otp === this.hardcodedOtp) {
          localStorage.setItem('employeeNo', this.hardcodedEmail); // Store employee number in localStorage
          this.router.navigate(['/dashboard']);
        } else {
          this.error = 'Invalid OTP';
        }
      }
    } else {
      if (this.loginForm.invalid) {
        return;
      } else {
        if (this.f.email.value === this.hardcodedEmail && this.f.password.value === this.hardcodedPassword) {
          this.isOtpStep = true;
        } else {
          this.error = 'Invalid employee number or password';
        }
      }
    }
  }

  timer() {
    let timerInterval;
    Swal.fire({
      timer: 1000,
      didOpen: () => {
        Swal.showLoading();
        timerInterval = setInterval(() => {
          const content = Swal.getHtmlContainer();
          if (content) {
            const b = content.querySelector('b');
            if (b) {
              b.textContent = Swal.getTimerLeft() + '';
            }
          }
        }, 0);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer');
      }
    });
  }

  activateAccount() {
    this.router.navigate(['/account/login-2']);
  }
}
