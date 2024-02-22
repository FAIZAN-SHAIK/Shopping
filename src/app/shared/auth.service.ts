import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  isUserLoggedIn :boolean = false;
  

isLogin(){
    this.isUserLoggedIn = true
  }
  
  isLogout(){
    this.isUserLoggedIn = false;
  }

  isAuthenticated(){
    return this.isUserLoggedIn
  }

  constructor() { }
}
