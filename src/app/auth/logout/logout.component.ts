import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {
  deleteMessage = `Do you want to logout?`;
  deleteTitle = 'Logout Confirmation!';
  showDeleteItem = true;

  isLoggedIn!: boolean;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn;
  }

  logout(value: boolean) {
    if (value) {
      this.authService.logout();
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/']);
    }
  }
}
