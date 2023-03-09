import { environment } from "src/environments/environment";
import { Component} from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ChangePasswordDto } from '../../../models/auth/change-password.auth';
import { UserInfo } from "src/models/auth/user-info.auth";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent {
  changePasswordForm: FormGroup;
  constructor(
    private authService: AuthService,
    private router: Router,
    fb: FormBuilder
  ) {
    this.changePasswordForm = fb.group({
      email: [''],
      password: [''],
      newPassword: [''],
      confirmPassword: [''],
    });
  }

  ngOnInit(): void {
    this.authService
      .findOne(environment.auth.currentUserUrl)
      .subscribe((authResponse) => {
        const userInfo = authResponse as UserInfo;
        this.changePasswordForm.patchValue({
         email: userInfo.email,
        });
      });
  }

  changePasswordSubmit(value: ChangePasswordDto): void {
    this.authService
      .update(environment.auth.changePasswordUrl, value)
      .subscribe((authUser) => this.router.navigate(['/']));
  }

  backToList(): void {
    this.router.navigate(['/']);
  }
}
