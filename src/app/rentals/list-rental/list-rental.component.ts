import { Component} from '@angular/core';
import { RentalService } from 'src/services/rental.service';

@Component({
  selector: 'app-list-rental',
  templateUrl: './list-rental.component.html',
  styleUrls: ['./list-rental.component.css']
})
export class ListRentalComponent {
  rentals$ = this.rentalService.Rentals$;

  constructor(private rentalService: RentalService) { }


}
