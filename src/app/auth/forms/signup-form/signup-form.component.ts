import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SignupDto } from 'src/models/auth/signup.auth';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent implements OnInit {
  @Input() signupForm: FormGroup;
  @Output() onSignupSubmit = new EventEmitter<SignupDto>();
  @Output() onBackToList = new EventEmitter<void>();

  constructor(fb: FormBuilder) {
    this.signupForm = fb.group({
      name: ['', [Validators.required, Validators.email]],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      gender: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      userType: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  signupSubmit(): void {
    this.onSignupSubmit.emit(this.signupForm.value);
  }

  backToList() {
    this.onBackToList.emit();
  }
}
