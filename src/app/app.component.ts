import { Component } from '@angular/core';
import { ProductsService } from './products.service';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fashion_kido';
  constructor(public ps : AppService){
    localStorage.setItem("data",JSON.stringify(ps.predefinedLoginDetails))
  }
  
}
