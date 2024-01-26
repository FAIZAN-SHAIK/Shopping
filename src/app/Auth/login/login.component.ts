import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AppService } from "src/app/app.service";
import { SharedService } from "src/app/shared/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})


export class LoginComponent {
  userNameLoginPage = "";
  passwordLoginPage = "";
  userFound = false;
  spinnerOn : boolean = false;

  constructor(
    private loginDetailDataService: AppService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private sharedService: SharedService) {
      
     }


  loginButtonClicked() {
    if (this.userNameLoginPage === '' || this.passwordLoginPage === '') {
      alert("details are mandatory")
    }
    else {

      this.loginDetailDataService.predefinedLoginDetails.find((i) => {
        if (i.username === this.userNameLoginPage && i.password === this.passwordLoginPage) {

          this.sharedService.isLogin();
          this.sharedService.userLoggedInName = this.userNameLoginPage
          this.userFound = true;
          this.spinnerOn = true

          setTimeout(()=>{
            
            this.router.navigate(['']);
          },1500)
        }
      })


      if (this.userNameLoginPage !== '' && this.passwordLoginPage !== '' && !this.userFound) {
        alert("You Dont have account , Create One!!");
        this.userNameLoginPage = "";
        this.passwordLoginPage = "";
      }
    }
  }

  signUpButtonClicked() {
    this.router.navigate(['/signup'])
  }



}
