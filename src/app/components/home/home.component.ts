import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router : Router,
    public homeService : SharedService) { }

  onLoginClicked(){
    this.router.navigate(['/login'])
  }

  ngOnInit(): void {
  }

}
