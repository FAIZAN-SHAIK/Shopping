import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/products.class';
import { ProductsService } from 'src/app/products.service';
import * as _ from 'lodash';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css'],
})
export class CartPageComponent {
  cartItems: Products[] = [];
  productValue: number = 0;
  totalPrice: number = 0;

  constructor(private ps: ProductsService, private router: Router, private http: HttpService) {
    // this.cartItems = this.ps.cartProducts;

    this.http.getUser(Number(localStorage.getItem("loginUserId"))).subscribe((x) => {
      this.cartItems = x.addtocart
    })

  }

  calculateTotalPrice() {
    return this.cartItems.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  }

  increaseQuantity(product: any) {
    product.quantity++;
    this.calculateTotalPrice();
  }

  decreaseQuantity(product: any) {
    if (product.quantity > 1) {
      product.quantity--;
      this.calculateTotalPrice();
    }
    if (product.quantity === 0) {
      const index = this.cartItems.indexOf(product);
      if (index !== -1) {
        this.cartItems.splice(index, 1);
      }
    }
  }

  productClicked(product: any) {
    this.router.navigate(['/productDetails/' + product.id]);
  }

  deleteProduct(product: Products) {
    // this.ps.deleteProduct(product);
    this.http.deleteProduct(Number(localStorage.getItem('loginUserId')), product.id).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e),

    })
  }

  placeOrder() {
    let productsFromCart = this.ps.cartProducts;
    let pushToBuyProducts: Products[] = _.cloneDeep(productsFromCart);
    this.ps.clearBuyProducts();
    this.ps.buyProducts = pushToBuyProducts;
    this.router.navigate(['buynow']);
  }

  saveForLater(product: Products) {
    this.ps.addProductToSaveToCart(product);
    this.ps.deleteProduct(product);

  }
}
