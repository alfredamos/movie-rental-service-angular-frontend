import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteItemComponent } from './delete-item/delete-item.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import {RouterModule} from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DeleteItemComponent,
    NavigationBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    NavigationBarComponent,
    DeleteItemComponent
  ]
})
export class SharedModule { }
