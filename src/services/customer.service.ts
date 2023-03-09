import { CreateCustomerDto } from "src/models/customers/create-customer.model";
import { DataService } from "./data.services";
import { CustomerDto } from "src/models/customers/customer.model";
import { UpdateCustomerDto } from "src/models/customers/update-customer.model";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../environments/environment';

export type Customer = CreateCustomerDto | CustomerDto | UpdateCustomerDto;

@Injectable({
  providedIn: 'root',
})
export class CustomerService extends DataService<Customer> {
  private customersSubject = new BehaviorSubject<Customer[]>(null!);
  customers$ = this.customersSubject.asObservable();

  updateCustomers$(value: CustomerDto[]): void {
    this.customersSubject.next(value);
  }

  get Customers$ (){
    return this.customers$ = this.findAll(environment.customerUrl) as Observable<CustomerDto[]>;
  }
}
