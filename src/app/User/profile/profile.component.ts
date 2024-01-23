import { Component, NgModule, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { AppService } from "src/app/app.service";
import { login } from "src/app/login";
import { SharedService } from "src/app/shared/auth.service";

@Component({
    selector:'app-profile',
    templateUrl:'./profile.component.html',
    styleUrls:['./profile.component.css'],
    
})

export class ProfileComponent implements OnInit {

  userProfileDetails: login;
  userDetailsForm: FormGroup;

  constructor(
    private profileAppService: AppService,
    private profileSharedService: SharedService
  ) { }


  ngOnInit(): void {

    this.formdata()
  }

  formdata() {
    this.userProfileDetails = this.profileAppService.predefinedLoginDetails.find((x) => {
      return x.username === this.profileSharedService.userLoggedInName

    })

    this.userDetailsForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      gender: new FormControl(''),
      mobile: new FormControl(''),
      emailid: new FormControl(''),
      address: new FormControl(''),

    })

    this.userDetailsForm.patchValue(this.userProfileDetails)

    this.userDetailsForm.disable()
  }

  onSave() {
    const index = this.profileAppService.predefinedLoginDetails.findIndex((x) => {
      return x.username === this.profileSharedService.userLoggedInName;
    });

    if (index !== -1) {
      this.profileAppService.predefinedLoginDetails[index] = this.userDetailsForm.value;
    }
    this.formdata()
    this.userDetailsForm.disable()
  }

  onEditClicked() {
    this.userDetailsForm.enable()
  }


}
