import { CreateRentalDto } from "src/models/rentals/create-rental.model";
import { RentalDto } from "src/models/rentals/rental.model";
import { Injectable } from "@angular/core";
import { UpdateRentalDto } from "src/models/rentals/update-rental.model";
import { DataService } from "./data.services";
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from "src/environments/environment";


export type Rental = CreateRentalDto | RentalDto | UpdateRentalDto ;


@Injectable({
  providedIn: 'root'
})
export class RentalService extends DataService<Rental> {
  private rentalsSubject = new BehaviorSubject<Rental[]>(null!);
  rentals$ = this.rentalsSubject.asObservable();

  get Rentals$(){
    return this.rentals$ = this.findAll(environment.rentalUrl) as Observable<RentalDto[]>;
  }

  updateRentals$(value: RentalDto[]): void {
    this.rentalsSubject.next(value);
  }
}
