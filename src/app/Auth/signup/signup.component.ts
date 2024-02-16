import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { HttpService } from 'src/app/http.service';

import { login } from 'src/app/login';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignUpComponent implements OnInit {
  userNameSignUpPage: string = '';
  PasswordSignUpPage: string = '';
  reEnterPasswordSignUPPage: string = '';

  UserData: login[] | null = null;

  checkUserRepeated: boolean = false;

  constructor(
    private signUpPageService: AppService,
    private router: Router,
    private http: HttpService
  ) {}
  ngOnInit(): void {
    this.http.getUsers().subscribe((user) => {
      this.UserData = user;
      console.log(this.UserData);
    });
  }

  newRegistration() {

    if(this.UserData){
      this.UserData.find((x: login) => {
        if (x.username === this.userNameSignUpPage) {
          this.checkUserRepeated = true;
          console.log(this.checkUserRepeated);
        }
      });

    }
   

    if (
      this.userNameSignUpPage === '' ||
      this.PasswordSignUpPage === '' ||
      this.reEnterPasswordSignUPPage === ''
    ) {
      alert('Details are mandatory');
      this.userNameSignUpPage = '';
      this.PasswordSignUpPage = '';
      this.reEnterPasswordSignUPPage = '';
    } else if (this.checkUserRepeated) {
      alert('you are already our user');
      this.userNameSignUpPage = '';
      this.PasswordSignUpPage = '';
      this.reEnterPasswordSignUPPage = '';
      this.checkUserRepeated = false;
    } else if (
      this.PasswordSignUpPage === this.reEnterPasswordSignUPPage &&
      !this.checkUserRepeated
    ) {
      // this.signUpPageService.newSignupUserName = this.userNameSignUpPage;
      // this.signUpPageService.newSignupUserPassword = this.PasswordSignUpPage;
      this.router.navigate(['/signupUserDetails']);
    } else {
      alert('password mismatch');
      this.userNameSignUpPage = '';
      this.PasswordSignUpPage = '';
      this.reEnterPasswordSignUPPage = '';
    }
  }
}
