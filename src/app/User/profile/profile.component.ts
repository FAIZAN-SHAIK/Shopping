import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { login } from 'src/app/login';
import { SharedService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  userProfileDetails: login | undefined ;
  saveDisabled : boolean = true;
  userDetailsForm: FormGroup = new FormGroup({});

  constructor(
    private profileAppService: AppService,
    private profileSharedService: SharedService
  ) {}

  ngOnInit(): void {

  this.userDetailsForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('',Validators.required),
      firstname: new FormControl('',Validators.required),
      lastname: new FormControl('',Validators.required),
      gender: new FormControl('',Validators.required),
      mobile: new FormControl('',[Validators.minLength(10),Validators.maxLength(10)]),
      emailid: new FormControl('',Validators.email),
      address: new FormControl('',Validators.required),
    });

    this.userDetailsForm.disable();

    
      this.userProfileDetails= this.profileAppService.predefinedLoginDetails.find((x)=>{
        return x.username === this.profileSharedService.userLoggedInName
      })
  
    

    this.userDetailsForm.patchValue(this.userProfileDetails as Object);
  }

 

  onSave() {
    const savedValue = this.userDetailsForm.value
    console.log(this.userDetailsForm.valid);

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
    this.saveDisabled = true;
  }

  onEditClicked() {

    this.saveDisabled = false;

    this.userDetailsForm.get('password')?.enable();
    this.userDetailsForm.get('firstname')?.enable();
    this.userDetailsForm.get('lastname')?.enable();
    this.userDetailsForm.get('gender')?.enable();
    this.userDetailsForm.get('mobile')?.enable();
    this.userDetailsForm.get('emailid')?.enable();
    this.userDetailsForm.get('address')?.enable();

    // Disable the username field
    this.userDetailsForm.get('username')?.disable();
  }

  canExit(){
    if(this.userDetailsForm.dirty && !this.userDetailsForm.disabled ){
      return confirm("Do You Really Want To go back... You have Unsaved Changes..");
    }
    else{
      return true;
    }
  }
}
