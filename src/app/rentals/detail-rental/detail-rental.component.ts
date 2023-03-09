import { Component, OnInit } from '@angular/core';
import { RentalService } from '../../../services/rental.service';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, map, Observable } from 'rxjs';
import { RentalDto } from 'src/models/rentals/rental.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-detail-rental',
  templateUrl: './detail-rental.component.html',
  styleUrls: ['./detail-rental.component.css']
})
export class DetailRentalComponent {
  rental$ = combineLatest([
    this.rentalService.findAll(environment.rentalUrl) as Observable<RentalDto[]>,
    this.route.paramMap
  ]).pipe(
    map(([rentals, paramMap]) => {
      const id = paramMap.get('id');
      return rentals.find(rental => rental.id === id);
    })
  )

  constructor(private rentalService: RentalService, private route: ActivatedRoute) { } 

}
