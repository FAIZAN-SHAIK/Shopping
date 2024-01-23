import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

import { login } from 'src/app/login';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent {
  userNameSignUpPage: string = ""
  PasswordSignUpPage: string = ""
  reEnterPasswordSignUPPage: string = ""

  checkUserRepeated = false;
  chechUsersToLogin: login[]

  constructor(
    private signUpPageService: AppService,
    private router: Router
  ) {
    this.chechUsersToLogin = signUpPageService.predefinedLoginDetails

  }

  newRegistration() {
    this.signUpPageService.predefinedLoginDetails.find((item) => {
      if (item.username === this.userNameSignUpPage) {
        this.checkUserRepeated = true;

      }
    })


    if (this.checkUserRepeated === false) {

      if (this.userNameSignUpPage === '' || this.PasswordSignUpPage === '' || this.reEnterPasswordSignUPPage === '') {
        alert("Details are mandatory")
        this.userNameSignUpPage = ''
        this.PasswordSignUpPage = ''
        this.reEnterPasswordSignUPPage = ''
      }
      else if (this.PasswordSignUpPage === this.reEnterPasswordSignUPPage) {

        this.signUpPageService.newSignupUserName = this.userNameSignUpPage
        this.signUpPageService.newSignupUserPassword = this.PasswordSignUpPage
        this.router.navigate(['/signupUserDetails'])
      }
      else {
        alert("password mismatch")
        this.userNameSignUpPage = ''
        this.PasswordSignUpPage = ''
        this.reEnterPasswordSignUPPage = ''

      }
    }
    else {
      alert("you are already our user")
      this.userNameSignUpPage = ''
      this.PasswordSignUpPage = ''
      this.reEnterPasswordSignUPPage = ''
    }
  }


}
