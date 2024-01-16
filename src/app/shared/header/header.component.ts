import { Component } from "@angular/core";
import { SharedService } from "../auth.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']

})
export class HeaderComponent {

  constructor(
    public headerService: SharedService,
    public router: Router,
    private route: ActivatedRoute) {

  }
  onLoggedOut() {
    this.headerService.isLogout()
    this.router.navigate(['/login'])

  }
  userClicked() {
    this.router.navigate(['/user/profile'])
  }

  cartClicked() {
    this.router.navigate(['/cartpage'])
  }

}
