import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AppService } from "src/app/app.service";
import { SharedService } from "src/app/shared/shared.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})


export class LoginComponent 
{
  userNameLoginPage = "";
  passwordLoginPage = "";
  userFound = false;  

  constructor(
    private loginDetailDataService: AppService,
    private router:Router,
    private activeRoute : ActivatedRoute,
    private sharedService : SharedService)
     {}


  loginButtonClicked() 
  {
    if (this.userNameLoginPage === '' || this.passwordLoginPage === '') 
    {
      alert("details are mandatory")
    }
    else 
    {

      this.loginDetailDataService.predefinedLoginDetails.find((i)=>{
        if (i.uName === this.userNameLoginPage && i.password === this.passwordLoginPage) 
          {
            // this.loginDetailDataService.userLogined = this.userNameLoginPage
            this.sharedService.isUserLoggedIn = true;
            this.sharedService.userLoggedInName =  this.userNameLoginPage
            this.userFound = true;
            this.router.navigate(['']);
            // console.log(this.sharedService.userLoggedInName)
          }
      })
        

        if(this.userNameLoginPage !=='' && this.passwordLoginPage!== '' && !this.userFound ) 
        {
          alert("You Dont have account , Create One!!");
          this.userNameLoginPage = "";
          this.passwordLoginPage = "";
        }
    }
  }

  signUpButtonClicked() 
  {
    this.router.navigate(['/signup'])
  }


  
}
