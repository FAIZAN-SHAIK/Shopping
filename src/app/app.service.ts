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
    new login("Faizan","shaik","male",6302778470,"faizanshaik@gmail.com","3-120,Nutakki,Mangalagiri","faizan","faizu123"),
    new login("Amod","Sah","male",1234567890,"amodsah@gmail.com","2/2--120,rajapur,patna,bihar","amod","amod123"),
    new login("Prateek","kumar","male",9798691239,"prateekkumar@gmail.com","4/4/120,studio Complex,Gota","prateek","pratek123"),
    new login("krutik","vaishnav","male",9875547773,"krutik@gmail.com","23/435-1 , vasantnagar , gota , jahrkhand","kruteek","kruteek123"),
    new login("Akhtar","shoaib","male",9674675476,"akhtarshoaib@gmail.com","2343:1-1 , ahmedabad,gujarat","shoaib","shoaib123"),
   

  ];

  addNewUser(firstname:string,lastname:string,gender:string,mobile:number,emailId:string,address:string,newUsername : string =this.newSignupUserName,newUserPassword : string=this.newSignupUserPassword)
  {
     let newUser = new login(firstname,lastname,gender,mobile,emailId,address,newUsername,newUserPassword)
     this.predefinedLoginDetails.push(newUser)
  }


  




}