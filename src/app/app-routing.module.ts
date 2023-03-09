import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListRentalComponent } from './rentals/list-rental/list-rental.component';
import { AddRentalComponent } from './rentals/add-rental/add-rental.component';
import { DeleteRentalComponent } from './rentals/delete-rental/delete-rental.component';
import { DetailRentalComponent } from './rentals/detail-rental/detail-rental.component';
import { EditRentalComponent } from './rentals/edit-rental/edit-rental.component';

import { ListGenreComponent } from './genres/list-genre/list-genre.component';
import { AddGenreComponent } from './genres/add-genre/add-genre.component';
import { DeleteGenreComponent } from './genres/delete-genre/delete-genre.component';
import { DetailGenreComponent } from './genres/detail-genre/detail-genre.component';
import { EditGenreComponent } from './genres/edit-genre/edit-genre.component';


import { ListCustomerComponent } from './customers/list-customer/list-customer.component';
import { DeleteCustomerComponent } from './customers/delete-customer/delete-customer.component';
import { DetailCustomerComponent } from './customers/detail-customer/detail-customer.component';

import { ListMovieComponent } from './movies/list-movie/list-movie.component';
import { AddMovieComponent } from './movies/add-movie/add-movie.component';
import { DeleteMovieComponent } from './movies/delete-movie/delete-movie.component';
import { DetailMovieComponent } from './movies/detail-movie/detail-movie.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';

import { ChangePasswordComponent } from './auth/change-password/change-password.component';
import { EditProfileComponent } from './auth/edit-profile/edit-profile.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { NotAllowedComponent } from './auth/not-allowed/not-allowed.component';
import { HomeComponent } from './auth/home/home.component';
import { MustLoginComponent } from './auth/must-login/must-login.component';
import { LoginRouteGuard } from './guards/login-route.guard';
import { AdminRouteGuard } from './guards/admin-route.guard';
import { LogoutComponent } from './auth/logout/logout.component';
import { CanModifyRouteGuard } from './guards/can-modify.guard';


const routes: Routes = [
  { path: '', component: ListRentalComponent, canActivate: [LoginRouteGuard] },
  {
    path: 'add-rental',
    component: AddRentalComponent,
    canActivate: [LoginRouteGuard],
  },
  {
    path: 'delete-rental/:id',
    component: DeleteRentalComponent,
    canActivate: [LoginRouteGuard, CanModifyRouteGuard],
  },
  {
    path: 'detail-rental/:id',
    component: DetailRentalComponent,
    canActivate: [LoginRouteGuard],
  },
  {
    path: 'edit-rental/:id',
    component: EditRentalComponent,
    canActivate: [LoginRouteGuard, CanModifyRouteGuard],
  },

  {
    path: 'customers',
    component: ListCustomerComponent,
    canActivate: [LoginRouteGuard, AdminRouteGuard],
  },
  {
    path: 'delete-customer/:id',
    component: DeleteCustomerComponent,
    canActivate: [LoginRouteGuard, AdminRouteGuard],
  },
  {
    path: 'detail-customer/:id',
    component: DetailCustomerComponent,
    canActivate: [LoginRouteGuard, AdminRouteGuard],
  },

  {
    path: 'genres',
    component: ListGenreComponent,
    canActivate: [LoginRouteGuard],
  },
  {
    path: 'add-genre',
    component: AddGenreComponent,
    canActivate: [LoginRouteGuard, AdminRouteGuard],
  },
  {
    path: 'delete-genre/:id',
    component: DeleteGenreComponent,
    canActivate: [LoginRouteGuard, AdminRouteGuard],
  },
  {
    path: 'detail-genre/:id',
    component: DetailGenreComponent,
    canActivate: [LoginRouteGuard],
  },
  {
    path: 'edit-genre/:id',
    component: EditGenreComponent,
    canActivate: [LoginRouteGuard, AdminRouteGuard],
  },

  {
    path: 'movies',
    component: ListMovieComponent,
    canActivate: [LoginRouteGuard],
  },
  {
    path: 'add-movie',
    component: AddMovieComponent,
    canActivate: [LoginRouteGuard, AdminRouteGuard],
  },
  {
    path: 'delete-movie/:id',
    component: DeleteMovieComponent,
    canActivate: [LoginRouteGuard, AdminRouteGuard],
  },
  {
    path: 'detail-movie/:id',
    component: DetailMovieComponent,
    canActivate: [LoginRouteGuard],
  },
  {
    path: 'edit-movie/:id',
    component: EditMovieComponent,
    canActivate: [LoginRouteGuard, AdminRouteGuard],
  },

  {
    path: 'change-password',
    component: ChangePasswordComponent,
    canActivate: [LoginRouteGuard],
  },
  {
    path: 'edit-profile',
    component: EditProfileComponent,
    canActivate: [LoginRouteGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'not-allowed', component: NotAllowedComponent },
  { path: 'must-login', component: MustLoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
