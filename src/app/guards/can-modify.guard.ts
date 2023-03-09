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
import { RentalDto } from '../../models/rentals/rental.model';
import { AuthUser } from '../../models/auth/auth-user.auth';
import { UuidTool } from 'uuid-tool';
import { UserType } from 'src/enums/user-type.enum';

@Injectable({
  providedIn: 'root',
})
export class CanModifyRouteGuard implements CanActivate {
  rentals: RentalDto[] = [];
  authUser = new AuthUser();

  constructor(private authService: AuthService, 
              private rentalService: RentalService,
              private router: Router) {
              this.rentalService.Rentals$.subscribe(rentals => this.rentals = rentals);
              this.authService.authUser$.subscribe(authUser => this.authUser = authUser)
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    
    const rental = this.rentals?.find(rental => rental.id === route.paramMap.get('id'));
    const customerId  = rental?.customerId;
    const userId = this.authUser?.id;
    const isAdmin = this.authUser?.userType === UserType.Admin
    const isEqual = UuidTool.compare(customerId!, userId);

    console.log({isAdmin});
    console.log({isEqual});
    
    

    if (isAdmin || isEqual) return true 
    else this.router.navigate(['/not-allowed']);

    return true;
  }
}
