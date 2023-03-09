import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { RentalDto } from 'src/models/rentals/rental.model';
import { RentalService } from 'src/services/rental.service';
import { CustomerService } from '../../../services/customer.service';
import { MovieService } from '../../../services/movie.service';

@Component({
  selector: 'app-add-rental',
  templateUrl: './add-rental.component.html',
  styleUrls: ['./add-rental.component.css'],
})
export class AddRentalComponent {
  rentalForm: FormGroup;
  customers$ = this.customerService.Customers$;
  movies$ = this.movieService.Movies$;

  constructor(
    private customerService: CustomerService,
    private movieService: MovieService,
    private rentalService: RentalService,
    private router: Router,
    fb: FormBuilder
  ) {
    this.rentalForm = fb.group({
      customerId: [''],
      movieId: [''],
      dateReturn: [''],
      rentalFee: [''],
    });
  }

  rentalSubmit(value: RentalDto): void {
    this.rentalService
      .create(environment.rentalUrl, value)
      .subscribe((rental) => this.router.navigate(['/']));
  }

  backToList(): void {
    this.router.navigate(['/']);
  }
}
