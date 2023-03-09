import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RentalDto } from 'src/models/rentals/rental.model';
import { RentalService } from 'src/services/rental.service';
import { CustomerService } from '../../../services/customer.service';
import { MovieService } from '../../../services/movie.service';

@Component({
  selector: 'app-edit-rental',
  templateUrl: './edit-rental.component.html',
  styleUrls: ['./edit-rental.component.css'],
})
export class EditRentalComponent implements OnInit {
  rentalForm: FormGroup;
  customers$ = this.customerService.Customers$;
  movies$ = this.movieService.Movies$;
  id = '';
  
  constructor(
    private customerService: CustomerService,
    private movieService: MovieService,
    private rentalService: RentalService,
    private route: ActivatedRoute,
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

  ngOnInit(): void {
    combineLatest([this.route.paramMap, this.rentalService.findAll(environment.rentalUrl)])
      .pipe(
        map(([paramMap, rentals]) => {
          this.id = paramMap.get('id')!;
          const rentalsL = rentals as RentalDto[];
          const rental = rentalsL.find((rental) => rental.id === this.id);
          return this.rentalForm.patchValue({
            customerId: rental?.customerId,
            movieId: rental?.movieId,
            dateReturn: rental?.dateReturn,
            rentalFee: rental?.rentalFee,
          });
        })
      )
      .subscribe();
  }

  rentalSubmit(value: RentalDto): void {
    value.id = this.id;
    value.rentalFee = Number(value.rentalFee);

    console.log({rental: value});
    
    this.rentalService
      .update(`${environment.rentalUrl}/${this.id}`, value)
      .subscribe((rental) => this.router.navigate(['/']));
  }

  backToList(): void {
    this.router.navigate(['/']);
  }
}
