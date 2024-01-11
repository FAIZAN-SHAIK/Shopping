import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductsModule } from './products/products.module';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './Auth/login/login.component';
import { SignUpComponent } from './Auth/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { SharedService } from './shared/shared.service';
import { UserComponent } from './User/user/user.component';
import { userModule } from './User/user.module';
import { SignUpUserdetailsComponent } from './Auth/signupUserDetails/signupUserDetails.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent, SignUpComponent , SignUpUserdetailsComponent],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    userModule,
    ProductsModule,
    SharedModule,
    FormsModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
