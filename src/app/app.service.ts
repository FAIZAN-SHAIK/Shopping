import { Injectable } from "@angular/core";
import { login } from "./login";

@Injectable({
  providedIn: 'root'
})

export class AppService {

  userLogined: string = ""
  newUser: string = ""
  newSignupUserName : string;
  newSignupUserPassword : string;
  

  predefinedLoginDetails: login[] = 
  [
    new login("Faizan","shaik","male",6302778470,"faizanshaik@gmail.com","3-120,Nutakki,522303,Mangalagiri,Andhra pradesh","faizan","faizu123"),
    new login("Amod","Sah","male",1234567890,"amodsah@gmail.com","2/2--120,Rajapur,841438,Patna,Bihar","amod","amod123"),
    new login("Prateek","kumar","male",9798691239,"prateekkumar@gmail.com","4/4/120,Gota,391456,Ahmedabad,Gujarat","prateek","pratek123"),
    new login("krutik","vaishnav","male",9875547773,"krutik@gmail.com","23/435-1,vasantnagar,436215,Ranchi,Jahrkhand","kruteek","kruteek123"),
    new login("Akhtar","shoaib","male",9674675476,"akhtarshoaib@gmail.com","2343:1-1,Vadej,318462,Ahmedabad,gujarat","shoaib","shoaib123"),
   

  ];

  addNewUser(firstname:string,lastname:string,gender:string,mobile:number,emailId:string,address:string,newUsername : string =this.newSignupUserName,newUserPassword : string=this.newSignupUserPassword)
  {
     let newUser = new login(firstname,lastname,gender,mobile,emailId,address,newUsername,newUserPassword)
     this.predefinedLoginDetails.push(newUser)
  }


  




}