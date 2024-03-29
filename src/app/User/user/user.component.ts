import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  loginUserName : string = String(localStorage.getItem("loginUserName"))

  constructor(
    public userService: SharedService,
    private router :Router,
    private route : ActivatedRoute,
    private ss : SharedService
  ) { }

  isRouteActive(path: string): boolean {
    return this.router.isActive(path,true);
  }

  
  profileClicked(){
    this.router.navigate(['profile'],{relativeTo:this.route})
  }
  ordersClicked(){
    
    this.router.navigate(['order'],{relativeTo:this.route})
  }
  wishlistClicked(){
    this.router.navigate(['wishlist'],{relativeTo:this.route})
  }
  settingsClicked(){
    this.router.navigate(['settings'],{relativeTo:this.route})
  }


  logoutClicked(){
    this.ss.isLogout()
    localStorage.clear()
    this.router.navigate(['/login'])

  }

  ngOnInit(): void {
  }

}
