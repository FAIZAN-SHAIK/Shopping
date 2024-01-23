import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { ProductsModule } from './products/products.module';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './Auth/login/login.component';
import { SignUpComponent } from './Auth/signup/signup.component';
import { FormsModule } from '@angular/forms';

import { userModule } from './User/user.module';
import { SignUpUserdetailsComponent } from './Auth/signupUserDetails/signupUserDetails.component';
import { CartModule } from './cart/cart.module';
import { AppService } from './app.service';


@NgModule({
  declarations:
    [
      AppComponent,
      HomeComponent,
      LoginComponent,
      SignUpComponent,
      SignUpUserdetailsComponent,
    ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    userModule,
    ProductsModule,
    SharedModule,
    FormsModule,
    CartModule
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
