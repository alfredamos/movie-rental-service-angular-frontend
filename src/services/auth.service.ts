import { LoginDto } from "src/models/auth/login.auth";
import { ChangePasswordDto } from '../models/auth/change-password.auth';
import { SignupDto } from "src/models/auth/signup.auth";
import { EditProfileDto } from "src/models/auth/edit-profile.auth";
import { DataService } from "./data.services";
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from "rxjs";
import { AuthUser } from "src/models/auth/auth-user.auth";
import { UserInfo } from '../models/auth/user-info.auth';
import { UserType } from "src/enums/user-type.enum";


export type authUser = ChangePasswordDto | EditProfileDto | LoginDto | SignupDto | AuthUser | UserInfo;

@Injectable({
  providedIn: 'root'
})
export class AuthService extends DataService<authUser> {
  private authUserSubject = new BehaviorSubject<AuthUser>(this.initialUser());
  authUser$ = this.authUserSubject.asObservable();
  isLoggedIn = false;
  isAdmin = false;

  updateAuthUser$(value: AuthUser): void{
    this.isAdmin = value.userType === UserType.Admin;
    this.isLoggedIn = value.isLoggedIn!;

    this.authUserSubject.next(value);
  }

  login(value: AuthUser){
    this.updateAuthUser$(value);
    console.log({token: value.token});

    this.setJwtToken(value.token!);
  }

  logout(): void{
    this.updateAuthUser$(this.initialUser());
    this.removeJwtToken();
  }

  getJwtToken(): string{
    return localStorage.getItem('token')!;
  }

  setJwtToken(token: string){
    return localStorage.setItem('token', token)
  }

  removeJwtToken(){
    localStorage.removeItem('token');
  }

  initialUser(){
    return {
      id: '',
      name: '',
      userType: UserType.Customer,
      token: '',
      isLoggedIn: false,
      message: 'Not logged-in',
    };
  }
}
