import { Component} from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { LoginDto } from '../../../models/auth/login.auth';
import { AuthUser } from 'src/models/auth/auth-user.auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(
    private authService: AuthService,
    private router: Router,
    fb: FormBuilder
  ) {
    this.loginForm = fb.group({
      email: [''],
      password: ['']
    })
  }

  loginSubmit(value: LoginDto): void{
    this.authService.create(environment.auth.loginUrl, value).subscribe(authResponse => {
      const authUser = authResponse as AuthUser

      this.authService.login(authUser);
      this.router.navigate(['/']);
    });
  }

  backToList(): void{
    this.router.navigate(['/']);
  }
}
