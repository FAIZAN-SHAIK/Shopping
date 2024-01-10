import { Injectable } from "@angular/core";
import { login } from "./login";

@Injectable({
  providedIn: 'root'
})

export class AppService {

  userLogined: string = ""
  newUser: string = ""
  objToEditCompany = {};

  predefinedLoginDetails: login[] = 
  [
    new login("faizan","faizu123","superAdmin"),
    new login("amod","amod123","admin"),
    new login("prateek","pratek123","superAdmin"),
    new login("kruteek","kruteek123","admin"),
    new login("shoaib","shoaib123","admin"),
    new login("f","f","superAdmin")

  ];

  

  getAccessType() : string {
  
     for(let item of this.predefinedLoginDetails){
      if(item.uName === this.userLogined){
        this.newUser = item.type;
      }
     } 
     return this.newUser

    // }
  }

  addNewUser(newUsername : string,newUserPassword : string,newUserType : string)
  {
     let newUser = new login(newUsername,newUserPassword,newUserType)
     this.predefinedLoginDetails.push(newUser)
  }


  




}