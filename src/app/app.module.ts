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
import { AbousUsComponent } from './components/aboutUs/aboutus.component';
import { ContactMeComponent } from './components/contactme/contactme.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    SignUpUserdetailsComponent,
    ContactMeComponent,
    AbousUsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    userModule,
    ProductsModule,
    SharedModule,
    FormsModule,
    CartModule,
    BrowserAnimationsModule,
    IvyCarouselModule,
    ButtonModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
