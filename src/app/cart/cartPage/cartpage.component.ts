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
  saveLaterProducts: Products[] = []
  productValue: number = 0;
  totalPrice: number = 0;

  constructor(
    private ps: ProductsService,
    private router: Router,
    private http: HttpService
  ) {
    // this.cartItems = this.ps.cartProducts;

    this.http
      .getUser(Number(localStorage.getItem('loginUserId')))
      .subscribe((x) => {
        this.cartItems = x.addtocart;
        this.saveLaterProducts = x.savelater;
      });
  }

  calculateTotalPrice() {
    return this.cartItems.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  }

  increaseQuantity(product: any) {
    this.http
      .getUser(Number(localStorage.getItem('loginUserId')))
      .subscribe((user) => {
        user.addtocart.find((x) => {
          if (x.id === product.id) {
            x.quantity++;
          }
        });

        this.http
          .updateUser(Number(localStorage.getItem('loginUserId')), user)
          .subscribe(() => {
            this.cartItems = user.addtocart;
          });
      });

    this.calculateTotalPrice();

  }

  decreaseQuantity(product: any) {
    this.http
      .getUser(Number(localStorage.getItem('loginUserId')))
      .subscribe((user) => {
        user.addtocart.find((x) => {
          if (x.id === product.id) {
            if (product.quantity > 1) {
              x.quantity--;
            }

            if (product.quantity === 0) {
              user.addtocart = user.addtocart.filter((x) => {
                return x.id !== product.id;
              });
            }
          }
        });

        this.http
          .updateUser(Number(localStorage.getItem('loginUserId')), user)
          .subscribe(() => {
            this.cartItems = user.addtocart;
          });
      });

    this.calculateTotalPrice();
  }

  productClicked(product: any) {
    this.router.navigate(['/productDetails/' + product.id]);
  }



  deleteProductFromCart(item: Products) {
    this.http
      .getUser(Number(localStorage.getItem('loginUserId')))
      .subscribe((user) => {
        const index = user.addtocart.indexOf(item);

        user.addtocart.splice(index, 1);

        this.http
          .updateUser(Number(localStorage.getItem('loginUserId')), user)
          .subscribe(
            () => {
              const index = this.cartItems.indexOf(item);
              this.cartItems.splice(index, 1);
              this.ps.updateCartLength();
            },
            (error) => {
              console.error('Error from wishlist.ts:', error);
            }
          );
      });
  }

  deleteProductFromSaveLater(item: Products) {


    this.http.getUser(Number(localStorage.getItem("loginUserId"))).subscribe((user) => {

      const index = user.savelater.findIndex(product => product.id === item.id);

      if (index !== -1) {
        user.savelater.splice(index, 1);
      }

      this.http.updateUser(Number(localStorage.getItem("loginUserId")), user).subscribe((user) => {
        this.saveLaterProducts = user.savelater
      })

    })

  }

  saveForLater(product: Products) {
    this.http
      .getUser(Number(localStorage.getItem('loginUserId')))
      .subscribe((user) => {

        let currentUser = user;
        currentUser.savelater.push(product);
        this.http
          .updateUser(Number(localStorage.getItem('loginUserId')), currentUser)
          .subscribe((user) => {
            this.deleteProductFromCart(product);
            this.saveLaterProducts = user.savelater;
            this.ps.updateCartLength();
          });
      });
  }

  addToCartFromSavelater(product: Products) {
    this.http.getUser(Number(localStorage.getItem("loginUserId"))).subscribe((user) => {
      user.addtocart.push(product)

      this.http.updateUser(Number(localStorage.getItem("loginUserId")), user).subscribe((user) => {
        this.deleteProductFromSaveLater(product);
        this.cartItems = user.addtocart
        this.ps.updateCartLength();
      })

    })


  }
  Proceed() {
    let price = this.calculateTotalPrice()
    this.http.getUser(Number(localStorage.getItem("loginUserId"))).subscribe((user) => {
      this.router.navigate([`checkout/${price}`])
      user.orders = user.addtocart;
      user.addtocart = []

      this.http.updateUser(Number(localStorage.getItem("loginUserId")), user).subscribe((x) => {

        this.ps.updateCartLength();

      })



    })
  }

  changeAddress() {
    this.router.navigate(['changeAddress'])
  }
}
