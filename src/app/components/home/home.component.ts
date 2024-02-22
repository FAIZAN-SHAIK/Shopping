import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/auth.service';
// import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loginUserName : string = String(localStorage.getItem("loginUserName"))
 

  constructor(
    private router: Router,
    public homeService: SharedService,
  ) {
    console.log(this.loginUserName)
   }

  onLoginClicked() {
    this.router.navigate(['/login'])
  }

  onCategoryImgClick(category: string) {
    this.router.navigate(['/products'], { queryParams: { category } })
  }

  ngOnInit(): void {
  }

}
