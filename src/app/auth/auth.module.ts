import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { NotAllowedComponent } from './not-allowed/not-allowed.component';
import { MustLoginComponent } from './must-login/must-login.component';
import { ChangePasswordFormComponent } from './forms/change-password-form/change-password-form.component';
import { EditProfileFormComponent } from './forms/edit-profile-form/edit-profile-form.component';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { SignupFormComponent } from './forms/signup-form/signup-form.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ChangePasswordComponent,
    EditProfileComponent,
    LogoutComponent,
    HomeComponent,
    NotAllowedComponent,
    MustLoginComponent,
    ChangePasswordFormComponent,
    EditProfileFormComponent,
    LoginFormComponent,
    SignupFormComponent
  ],
  imports: [
    SharedModule
  ]
})
export class AuthModule { }
