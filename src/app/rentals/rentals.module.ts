import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AddRentalComponent } from './add-rental/add-rental.component';
import { DeleteRentalComponent } from './delete-rental/delete-rental.component';
import { EditRentalComponent } from './edit-rental/edit-rental.component';
import { ListRentalComponent } from './list-rental/list-rental.component';
import { DetailRentalComponent } from './detail-rental/detail-rental.component';
import { RentalFormComponent } from './form/rental-form/rental-form.component';



@NgModule({
  declarations: [
    AddRentalComponent,
    DeleteRentalComponent,
    EditRentalComponent,
    ListRentalComponent,
    DetailRentalComponent,
    RentalFormComponent
  ],
  imports: [
    SharedModule
  ]
})
export class RentalsModule { }
