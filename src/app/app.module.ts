import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import { CustomersModule } from './customers/customers.module';
import { GenresModule } from './genres/genres.module';
import { MoviesModule } from './movies/movies.module';
import { RentalsModule } from './rentals/rentals.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { JwtTokenInterceptor } from './interceptors/jwt-token.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CustomersModule,
    GenresModule,
    MoviesModule,
    RentalsModule,
    SharedModule,
    AuthModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtTokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
