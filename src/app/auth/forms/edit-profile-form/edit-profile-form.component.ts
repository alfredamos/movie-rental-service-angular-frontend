import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EditProfileDto } from 'src/models/auth/edit-profile.auth';

@Component({
  selector: 'app-edit-profile-form',
  templateUrl: './edit-profile-form.component.html',
  styleUrls: ['./edit-profile-form.component.css'],
})
export class EditProfileFormComponent implements OnInit {
  @Input() editProfileForm: FormGroup;
  @Output() onEditProfileSubmit = new EventEmitter<EditProfileDto>();
  @Output() onBackToList = new EventEmitter<void>();

  constructor(fb: FormBuilder) {
    this.editProfileForm = fb.group({
      name: ['', [Validators.required, Validators.email]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      userType: [''],
    });
  }

  ngOnInit(): void {}

  editProfileSubmit(): void {
    this.onEditProfileSubmit.emit(this.editProfileForm.value);
  }

  backToList() {
    this.onBackToList.emit();
  }
}
