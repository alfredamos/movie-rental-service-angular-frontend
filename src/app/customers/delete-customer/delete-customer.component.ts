import { Component} from '@angular/core';
import { CustomerService } from '../../../services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CustomerDto } from '../../../models/customers/customer.model';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
})
export class DeleteCustomerComponent {
  id = '';
  deleteMessage = '';
  deleteTitle = '';
  showDeleteItem = false;
  customer: CustomerDto = new CustomerDto();

  customer$ = combineLatest([
    this.customerService.findAll(environment.customerUrl) as Observable<
      CustomerDto[]
    >,
    this.route.paramMap,
  ]).pipe(
    map(([customers, paramMap]) => {
      this.id = paramMap.get('id')!;
      this.customer = customers.find((customer) => customer.id === this.id)!;
      return this.customer;
    })
  );

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  deleteClick() {
    this.deleteMessage = `Do you want to delete category : ${this.customer?.name}?`;
    this.deleteTitle = "Customer Delete Confirmation!";
    this.showDeleteItem = !this.showDeleteItem;
  }

  deleteCustomer(value: boolean) {
    if(value){
      this.customerService.remove(`${environment.customerUrl}/${this.id}`).subscribe( cust => this.router.navigate(['/customers']))
    }else{
      this.router.navigate(['/customers']);
    }
  }
}
