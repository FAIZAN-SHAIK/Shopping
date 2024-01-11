import { Component } from "@angular/core";
import { SharedService } from "../shared.service";
import { Router } from "@angular/router";

@Component({
  selector:'app-header',
  templateUrl:'./header.component.html',
  styleUrls:['./header.component.css']

})
export class HeaderComponent{

  constructor(
    public headerService : SharedService,
    public router : Router){

  }
  onLoggedOut(){
    this.headerService.isUserLoggedIn = false;
    this.router.navigate(['/login'])

  }
  userClicked(){
    this.router.navigate(['/user/profile']) 
  }

}
