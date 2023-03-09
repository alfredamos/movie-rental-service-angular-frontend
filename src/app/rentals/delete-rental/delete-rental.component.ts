import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RentalDto } from 'src/models/rentals/rental.model';
import { RentalService } from 'src/services/rental.service';

@Component({
  selector: 'app-delete-rental',
  templateUrl: './delete-rental.component.html',
  styleUrls: ['./delete-rental.component.css'],
})
export class DeleteRentalComponent {
  id = '';
  deleteMessage = '';
  deleteTitle = '';
  showDeleteItem = false;
  rental: RentalDto = new RentalDto();

  rental$ = combineLatest([
    this.rentalService.findAll(environment.rentalUrl) as Observable<RentalDto[]>,
    this.route.paramMap,
  ]).pipe(
    map(([rentals, paramMap]) => {
      this.id = paramMap.get('id')!;
      this.rental = rentals.find((rentals) => rentals.id === this.id)!;
      return this.rental;
    })
  );

  constructor(
    private rentalService: RentalService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  deleteClick() {
    this.deleteMessage = `Do you want to delete category : ${this.rental?.id}?`;
    this.deleteTitle = 'Rental Delete Confirmation!';
    this.showDeleteItem = !this.showDeleteItem;
  }

  deleteRental(value: boolean) {
    if (value) {
      this.rentalService
        .remove(`${environment.rentalUrl}/${this.id}`)
        .subscribe((gen) => this.router.navigate(['/']));
    } else {
      this.router.navigate(['/']);
    }
  }
}
