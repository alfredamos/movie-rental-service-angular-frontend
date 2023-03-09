import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { SignupDto } from '../../../models/auth/signup.auth';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  
  constructor(
    private authService: AuthService,
    private router: Router,
    fb: FormBuilder
  ) {
    this.signupForm = fb.group({
      name: [''],
      email: [''],
      phone: [''],
      gender: [''],
      password: [''],
      confirmPassword: [''],
      userType: ['']
    });
  }

  ngOnInit(): void {}

  signupSubmit(value: SignupDto): void {
    this.authService
      .create(environment.auth.signupUrl, value)
      .subscribe((authUser) => this.router.navigate(['/']));
  }

  backToList() {
    this.router.navigate(['/']);
  }
}
