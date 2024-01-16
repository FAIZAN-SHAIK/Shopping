import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Products } from "src/app/products.class";
import { ProductsService } from "src/app/products.service";

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']

})

export class CartPageComponent {
  cartItems: Products[] = [];
  productValue : number = 0;
  totalPrice: number = 0;

  constructor(
    private ps: ProductsService,
    private router:Router
  ) {
    this.cartItems = this.ps.cartProducts
   
  }

  calculateTotalPrice(){
    return this.cartItems.reduce((total,product)=> total + (product.price * product.quantity),0)
  }

  increaseQuantity(product : any){
    product.quantity++;
    this.calculateTotalPrice()

  }
  decreaseQuantity(product : any){
    if (product.quantity > 1) {
      product.quantity--;
      this.calculateTotalPrice();
    }
    if(product.quantity === 0){
        const index = this.cartItems.indexOf(product);
      if (index !== -1) {
        this.cartItems.splice(index, 1);
      }
    }

  }

  productClicked(product : any){
    this.router.navigate(['/productDetails/'+product.id])
  }

  deleteProduct(product : any){
    const index = this.cartItems.indexOf(product);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }

}
