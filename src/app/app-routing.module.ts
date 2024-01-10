import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./Auth/login/login.component";
import { SignupComponent } from "./Auth/signup/signup.component";


const routes:Routes =[
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},

]

@NgModule({
  declarations:[],
  imports:[
    RouterModule.forRoot(routes)
  ]
})

export class AppRoutingModule{

}
