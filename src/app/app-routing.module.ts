import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./Auth/login/login.component";
import { SignUpComponent } from "./Auth/signup/signup.component";
import { UserComponent } from "./User/user/user.component";
import { SignUpUserdetailsComponent } from "./Auth/signupUserDetails/signupUserDetails.component";
import { AbousUsComponent } from "./components/aboutUs/aboutus.component";
import { ContactMeComponent } from "./components/contactme/contactme.component";
import { HeaderComponent } from "./header/header.component";


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'signupUserDetails', component: SignUpUserdetailsComponent },
  { path: 'aboutus', component: AbousUsComponent },
  { path: 'contactme', component: ContactMeComponent },



]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}
