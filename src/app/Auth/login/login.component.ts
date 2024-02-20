import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AppService } from "src/app/app.service";
import { HttpService } from "src/app/http.service";
import { login } from "src/app/login";
import { SharedService } from "src/app/shared/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})


export class LoginComponent {
  userNameLoginPage: string = "";
  passwordLoginPage: string = "";
  userFound = false;
  spinnerOn: boolean = false;

  constructor(
    private loginDetailDataService: AppService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private sharedService: SharedService,
    private http: HttpService) {

  }


  loginButtonClicked() {
    if (this.userNameLoginPage === '' || this.passwordLoginPage === '') {
      alert("details are mandatory")
    }
    else {

      this.http.getUsers().subscribe((user) => {

        user.find((x: login) => {

          if (x.username === this.userNameLoginPage && x.password === this.passwordLoginPage) {


            this.sharedService.isLogin();
            this.sharedService.userLoggedInName = this.userNameLoginPage;
            this.userFound = true;
            this.spinnerOn = true;

            localStorage.setItem("loginUserName", x.firstname)
            localStorage.setItem("loginUserId", JSON.stringify(x.id))

            setTimeout(() => {

              this.router.navigate(['']);
            }, 1000)

          }
        })
      })
    }

  }

  signUpButtonClicked() {
    this.router.navigate(['/signup'])
  }



}
