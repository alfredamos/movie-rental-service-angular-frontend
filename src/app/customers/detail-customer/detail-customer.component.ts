import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../../services/customer.service';
import { combineLatest, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CustomerDto } from '../../../models/customers/customer.model';

@Component({
  selector: 'app-detail-customer',
  templateUrl: './detail-customer.component.html',
  styleUrls: ['./detail-customer.component.css']
})
export class DetailCustomerComponent implements OnInit {
  customer$ = combineLatest([
    this.customerService.findAll(environment.customerUrl) as Observable<CustomerDto[]>,
    this.route.paramMap
  ]).pipe(
    map(([customers, paramMap])=> {
      const id = paramMap.get('id');
      return customers.find(customer => customer.id === id);
    })
  )  

  constructor(private customerService: CustomerService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
