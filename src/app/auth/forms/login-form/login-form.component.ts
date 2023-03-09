import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginDto } from 'src/models/auth/login.auth';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  @Input() loginForm: FormGroup;
  @Output() onLoginSubmit = new EventEmitter<LoginDto>();
  @Output() onBackToList = new EventEmitter<void>();

  constructor(fb: FormBuilder) {
    this.loginForm = fb.group({
      name: ['', [Validators.required, Validators.email]],
      email: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  loginSubmit(): void {
    this.onLoginSubmit.emit(this.loginForm.value);
  }

  backToList() {
    this.onBackToList.emit();
  }
}
