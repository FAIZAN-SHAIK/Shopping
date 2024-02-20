import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { HttpService } from 'src/app/http.service';
import { address } from 'src/app/login';
import { SharedService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-changeAddress',
  templateUrl: './changeAddress.component.html',
  styleUrls: ['./changeAddress.component.css'],
})
export class ChangeAddress implements OnInit {
  changeAddressClicked: boolean = false;
  addressChangeForm: FormGroup = new FormGroup({});
  userAddress!: address;
  userMobileName: number = 0;

  constructor(
    private ss: SharedService,
    private as: AppService,
    private router : Router,
    private httpClient: HttpService
  ) {
    this.userData()
      
  }
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

    userData(){
        this.httpClient
      .getUser(Number(localStorage.getItem('loginUserId')))
      .subscribe((user) => {
        this.userMobileName = user.mobile;
        this.userAddress = user.address;
        this.initializeForm();


        
      });
        
    }

  initializeForm() {
   
    
    this.addressChangeForm = new FormGroup({
        houseNumber: new FormControl(this.userAddress['houseNumber']),
        mobileNumber: new FormControl(this.userMobileName),
        locality: new FormControl(this.userAddress['area']),
        pincode: new FormControl(this.userAddress['pincode']),
        city: new FormControl(this.userAddress['city']),
        state: new FormControl(this.userAddress['state']),
      });

   
  }

  onSave() {
    // console.log(this.userAddress);
    
    let houseNumber = this.addressChangeForm.value.houseNumber;
    let mobileNumber = this.addressChangeForm.value.mobileNumber;
    let locality = this.addressChangeForm.value.locality;
    let pincode = this.addressChangeForm.value.pincode;
    let city = this.addressChangeForm.value.city;
    let state = this.addressChangeForm.value.state;
    const address={houseNumber:houseNumber,area : locality,city:city,pincode:pincode,state:state}

    this.httpClient.patchUser(Number(localStorage.getItem("loginUserId")),{mobile:mobileNumber,address}).subscribe((x)=>{
        this.userAddress = address
        this.userMobileName = mobileNumber

    })
    

    

    this.changeAddressClicked = false;
  }

  changeAddress() {
    this.changeAddressClicked = true;
  }

  checkout() {
    this.router.navigate(['cartpage'])
  }
}
