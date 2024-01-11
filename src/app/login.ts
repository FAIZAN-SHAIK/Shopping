import { last } from "rxjs";

export class login {
    constructor(firstname:string,lastname:string,gender:string,mobile:number,emailId:string,address:string, uName?: string,password?: string){
      this.firstname = firstname;
      this.lastname = lastname;
      this.gender = gender;
      this.mobile = mobile;
      this.emailId = emailId;
      this.address = address;
      this.uName = uName;
      this.password = password;
      
    }
  
      firstname:string;
      lastname:string;
      gender:string;
      mobile:number;
      emailId:string;
      address:string
      uName: string;
      password: string;
     
      
    }