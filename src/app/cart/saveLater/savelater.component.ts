import { Component, EventEmitter, Output } from "@angular/core";
import { Router } from "@angular/router";
import { Products } from "src/app/products.class";
import { ProductsService } from "src/app/products.service";
import * as _ from 'lodash';
import { HttpService } from "src/app/http.service";
import { eventListeners } from "@popperjs/core";

@Component({
  selector: "app-savelater",
  templateUrl: './savelater.component.html',
  styleUrls: ['./savelater.component.css']
})

export class SaveLaterComponent {
  saveLaterProducts: Products[] = []

@Output() savelaterLength  = new EventEmitter<number>();
  constructor
    (
      private ps: ProductsService,
      private router: Router,
      private http: HttpService
    ) {
    
    // this.saveLaterProducts = ps.savelater
    this.saveLaterProducts = ps.ProductsSavedLater()
    console.log( this.saveLaterProducts)

  }

  

  productClicked(product: Products) {
    this.router.navigate(['/products'])
  }

  addToCart(product: any) {
    this.ps.addProductToCart(product as Products);
    this.ps.deleteProductFromSaveLater(product);
  }

  deleteProduct(product: Products) {
    this.ps.deleteProductFromSaveLater(product);
  }

}
