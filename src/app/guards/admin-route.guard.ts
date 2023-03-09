import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { RentalService } from '../../services/rental.service';

@Injectable({
  providedIn: 'root'
})
export class AdminRouteGuard implements CanActivate {
  constructor(private authService: AuthService,             
              private router: Router) {
              }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    
    if (!this.authService.isAdmin) this.router.navigate(['/not-allowed']);

    return true;
  }
}
