import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { AppService } from "src/app/app.service";
import { SharedService } from "src/app/shared/auth.service";

@Component({
    selector:'app-changeAddress',
    templateUrl:'./changeAddress.component.html',
    styleUrls:['./changeAddress.component.css']
})

export class ChangeAddress implements OnInit{
    addressChangeForm : FormGroup ;
    userAddress : string[];
    userMobileName : number;

    
    @Output() updatedDataFromChangeData = new EventEmitter<any>();


    constructor(private ss : SharedService,private as:AppService){
    this.as.predefinedLoginDetails.find((x)=>{
        if(x.firstname.toLowerCase() === ss.userLoggedInName){
            this.userAddress = x.address.split(',')
            this.userMobileName = x.mobile
        }

    })

        
    }
    ngOnInit(): void {
        this.addressChangeForm = new FormGroup({
            'houseNumber' : new FormControl(''),
            'mobileNumber' : new FormControl(''),
            'locality' : new FormControl(''),
            'pincode' : new FormControl(''),
            'city' : new FormControl(''),
            'state' : new FormControl(''),

        })

        if(this.addressChangeForm){
            this.addressChangeForm.setValue({
                'houseNumber' : this.userAddress[0],
                'mobileNumber' : this.userMobileName,
                'locality' : this.userAddress[1],
                'pincode' : this.userAddress[2],
                'city' : this.userAddress[3],
                'state' : this.userAddress[4],
            })
        }
        
    }

    onSave( ){
        let houseNumber = this.addressChangeForm.value.houseNumber
        let mobileNumber = this.addressChangeForm.value.mobileNumber
        let locality = this.addressChangeForm.value.locality
        let pincode = this.addressChangeForm.value.pincode
        let city = this.addressChangeForm.value.city
        let state = this.addressChangeForm.value.state

        this.as.predefinedLoginDetails.find((x)=>{
            if(x.firstname.toLowerCase() === this.ss.userLoggedInName){
                x.address = [houseNumber,locality,pincode,city,state].join(',')
                x.mobile = mobileNumber
            }
        })

        this.updatedDataFromChangeData.emit(true)


    }


}