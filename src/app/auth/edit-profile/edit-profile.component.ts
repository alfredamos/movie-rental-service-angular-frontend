import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService, authUser } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { EditProfileDto } from '../../../models/auth/edit-profile.auth';
import { environment } from 'src/environments/environment';
import { UserInfo } from '../../../models/auth/user-info.auth';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
})
export class EditProfileComponent implements OnInit {
  editProfileForm: FormGroup;
  constructor(private authService: AuthService, private router: Router, fb: FormBuilder) {
    this.editProfileForm = fb.group({
      name: [''],
      email: [''],
      phone: [''],
      gender: [''],
      password: [''],
      confirmPassword: [''],
      userType: ['']
    })
  }

  ngOnInit(): void {
    this.authService.findOne(environment.auth.currentUserUrl).subscribe(authResponse => {
      const userInfo = authResponse as UserInfo;
      this.editProfileForm.patchValue({
      ...userInfo,
        password: "",
        confirmPassword: ""
      })
    })
  }

  editProfileSubmit(value: EditProfileDto): void{
    console.log({value});

    this.authService.update(environment.auth.editProfileUrl, value).subscribe(authUser => this.router.navigate(['/']));
  }

  backToList(): void{
    this.router.navigate(['/']);
  }

}
