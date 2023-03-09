import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MovieDto } from 'src/models/movies/movie.model';
import { CustomerService } from 'src/services/customer.service';
import { MovieService } from 'src/services/movie.service';
import { Observable } from 'rxjs';
import { CustomerDto } from '../../../../models/customers/customer.model';
import { RentalDto } from 'src/models/rentals/rental.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-rental-form',
  templateUrl: './rental-form.component.html',
  styleUrls: ['./rental-form.component.css'],
})
export class RentalFormComponent {
  @Input() rentalForm: FormGroup;
  @Input() formName = '';
  @Input() customers$ = new Observable<CustomerDto[]>();
  @Input() movies$ = new Observable<MovieDto[]>();
  @Output() onRentalSubmit = new EventEmitter<RentalDto>();
  @Output() onBackToList = new EventEmitter<void>();

  constructor(fb: FormBuilder) {
    this.rentalForm = fb.group({
      customerId: ['', Validators.required],
      movieId: ['', Validators.required],
      rentalFee: ['', Validators.required],
    });
  }

  rentalSubmit(): void {
    this.onRentalSubmit.emit(this.rentalForm.value);
  }

  backToList(): void {
    this.onBackToList.emit();
  }
}
