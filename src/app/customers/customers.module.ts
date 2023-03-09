import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ListCustomerComponent } from './list-customer/list-customer.component';
import { DetailCustomerComponent } from './detail-customer/detail-customer.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';



@NgModule({
  declarations: [
    ListCustomerComponent,
    DetailCustomerComponent,
    DeleteCustomerComponent,
  ],
  imports: [
    SharedModule
  ]
})
export class CustomersModule { }
