import { Component, NgModule, OnInit } from "@angular/core";
import { AppService } from "src/app/app.service";
import { login } from "src/app/login";
import { SharedService } from "src/app/shared/auth.service";

@Component({
    selector:'app-profile',
    templateUrl:'./profile.component.html',
    styleUrls:['./profile.component.css'],
    
})

export class ProfileComponent implements OnInit{

    userProfileDetails : login  ;

    constructor(
        private profileAppService:AppService,
        private profileSharedService : SharedService
        ){}
    ngOnInit(): void {
        this.userProfileDetails = this.profileAppService.predefinedLoginDetails.find((x)=>{
            return x.uName === this.profileSharedService.userLoggedInName
             
         })
    }
    
    
}