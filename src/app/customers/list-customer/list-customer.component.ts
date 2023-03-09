import { Component } from '@angular/core';
import { CustomerService } from 'src/services/customer.service';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css'],
})
export class ListCustomerComponent {
  customers$ = this.customerService.Customers$;

  constructor(
    private customerService: CustomerService,
  ) {}
}
