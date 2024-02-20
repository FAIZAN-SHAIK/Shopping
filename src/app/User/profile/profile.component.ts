import { HttpSentEvent } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { HttpService } from 'src/app/http.service';
import { login } from 'src/app/login';
import { SharedService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  userProfileDetails!: login;
  saveDisabled: boolean = true;
  userDetailsForm: FormGroup = new FormGroup({});

  constructor(
    private profileAppService: AppService,
    private profileSharedService: SharedService,
    private http: HttpService
  ) {
    this.getUsersData();
  }

  getUsersData(){
    this.http.getUser(Number(localStorage.getItem("loginUserId"))).subscribe((user)=>{
      this.userProfileDetails = user

      const userData = {
        username:user.username,
        password : user.password,
        firstname : user.firstname,
        lastname : user.lastname,
        gender : user.gender,
        mobile : user.mobile,
        emailid : user.emailid,
        city : user.address.city,
        state : user.address.state,
      }

      this.userDetailsForm.patchValue(userData);
    })
  }

  ngOnInit(): void {
    this.userDetailsForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('', Validators.required),
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      mobile: new FormControl('', [
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
      emailid: new FormControl('', Validators.email),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
    });

    this.userDetailsForm.disable();
  }

  onSave() {
    const savedValue = this.userDetailsForm.value;

    // this.profileAppService.predefinedLoginDetails.find((x)=>{
    //   if(x.username === this.profileSharedService.userLoggedInName){
    //     x.address = savedValue.address
    //     x.emailid = savedValue.emailid
    //     x.firstname = savedValue.firstname
    //     x.mobile = savedValue.mobile
    //     x.gender = savedValue.gender
    //     x.password = savedValue.password
    //     x.lastname = savedValue.lastname
    //   }
    // })

    const dataChange = {
      address: {
        ...this.userProfileDetails.address,
        city: savedValue.city,
        state: savedValue.state,
      },
      emailid: savedValue.email,
      firstname: savedValue.firstname,
      mobile: savedValue.mobile,
      gender: savedValue.gender,
      password: savedValue.password,
      lastname: savedValue.lastname,
    };

    this.http
      .patchUser(Number(localStorage.getItem('loginUserId')), dataChange)
      .subscribe(() => {
        this.userDetailsForm.disable();
        this.saveDisabled = true;
      });

   
  }

  onEditClicked() {
    this.saveDisabled = false;

    this.userDetailsForm.get('password')?.enable();
    this.userDetailsForm.get('firstname')?.enable();
    this.userDetailsForm.get('lastname')?.enable();
    this.userDetailsForm.get('gender')?.enable();
    this.userDetailsForm.get('mobile')?.enable();
    this.userDetailsForm.get('emailid')?.enable();
    this.userDetailsForm.get('city')?.enable();
    this.userDetailsForm.get('state')?.enable();

    // Disable the username field
    this.userDetailsForm.get('username')?.disable();
  }

  canExit() {
    if (this.userDetailsForm.dirty && !this.userDetailsForm.disabled) {
      return confirm(
        'Do You Really Want To go back... You have Unsaved Changes..'
      );
    } else {
      return true;
    }
  }
}
