import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AppService } from "src/app/app.service";


@Component({
    selector:'app-signupUserDetails',
    templateUrl:'./signupUserDetails.component.html',
    styleUrls:['./signupUserDetails.component.css']
})
export class SignUpUserdetailsComponent{

    firstName:string='';
    lastName:string='';
    Mobile:number=0;
    gender:string=''
    emailId:string='';
    address:string='';
    
    constructor(
        private signupDetailsService : AppService,
        private router : Router
    ){

    }

    onSave(){
        this.signupDetailsService.addNewUser(this.firstName,this.lastName,this.gender,this.Mobile,this.emailId,this.address)
        this.router.navigate(['/login'])
       
    }

}