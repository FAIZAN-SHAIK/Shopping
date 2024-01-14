import { Component } from "@angular/core";
import { Products } from "src/app/products.class";
import { ProductsService } from "src/app/products.service";

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']

})

export class CartPageComponent {
  cartItems: Products[] = [];

  constructor(
    private ps: ProductsService
  ) {
    this.cartItems = this.ps.cartProducts
    console.log(this.cartItems[0].brand)
  }

}
