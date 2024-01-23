import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { login } from 'src/app/login';
import { SharedService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  userProfileDetails: login;
  userDetailsForm: FormGroup;

  constructor(
    private profileAppService: AppService,
    private profileSharedService: SharedService
  ) {}

  ngOnInit(): void {

  this.userDetailsForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      gender: new FormControl(''),
      mobile: new FormControl(''),
      emailid: new FormControl(''),
      address: new FormControl(''),
    });

    this.userDetailsForm.disable();

    this.userProfileDetails= this.profileAppService.predefinedLoginDetails.find((x)=>{
      return x.username === this.profileSharedService.userLoggedInName
    })

    this.userDetailsForm.patchValue(this.userProfileDetails);
  }

 

  onSave() {
    const savedValue = this.userDetailsForm.value

    this.profileAppService.predefinedLoginDetails.find((x)=>{
      if(x.username === this.profileSharedService.userLoggedInName){
        x.address = savedValue.address
        x.emailid = savedValue.emailid
        x.firstname = savedValue.firstname
        x.mobile = savedValue.mobile
        x.gender = savedValue.gender
        x.password = savedValue.password
        x.lastname = savedValue.lastname
      }
    })

   
   
    this.userDetailsForm.disable();
  }

  onEditClicked() {
    this.userDetailsForm.get('password').enable();
    this.userDetailsForm.get('firstname').enable();
    this.userDetailsForm.get('lastname').enable();
    this.userDetailsForm.get('gender').enable();
    this.userDetailsForm.get('mobile').enable();
    this.userDetailsForm.get('emailid').enable();
    this.userDetailsForm.get('address').enable();

    // Disable the username field
    this.userDetailsForm.get('username').disable();
  }
}
