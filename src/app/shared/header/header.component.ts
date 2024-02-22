import { Component, OnInit } from "@angular/core";
import { SharedService } from "../auth.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductsService } from "src/app/products.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']

})
export class HeaderComponent implements OnInit {
  cartSize: number = 0;

  userLoggeIn : number = Number(localStorage.getItem("loginUserId"))

  constructor(
    public headerService: SharedService,
    public ps: ProductsService,
    public router: Router,
    private route: ActivatedRoute) {
      this.ps.cartLength$.subscribe((length) => {
        this.cartSize = length;
      })

  }
  ngOnInit(): void {
    
  }
  onLoggedOut() {
    this.headerService.isLogout()
    this.router.navigate(['/login'])
    localStorage.removeItem("loginUserName")
    localStorage.removeItem("loginUserId")

  }
  userClicked() {
    this.router.navigate(['/user/profile'])
  }

  cartClicked() {
    this.router.navigate(['/cartpage'])
  }

}
