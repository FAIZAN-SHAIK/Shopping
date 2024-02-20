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

    this.http.getUser(Number(localStorage.getItem("loginUserId"))).subscribe((user) => {

      user.addtocart.find((x) => {
        if (x.id === product.id) {
          x.quantity++;
        }

      })

      this.http.updateUser(Number(localStorage.getItem("loginUserId")), user).subscribe(() => {

        this.cartItems = user.addtocart
      }
      )

    })


    this.calculateTotalPrice();
  }

  decreaseQuantity(product: any) {

    this.http.getUser(Number(localStorage.getItem("loginUserId"))).subscribe((user) => {

      user.addtocart.find((x) => {
        if (x.id === product.id) {
          if (product.quantity > 1) {
            x.quantity--;

          }

          if (product.quantity === 0) {

            user.addtocart = user.addtocart.filter((x) => {
              return x.id !== product.id;
            })

          }

        }

      })

      this.http.updateUser(Number(localStorage.getItem("loginUserId")), user).subscribe(() => {

        this.cartItems = user.addtocart
      }
      )

    })

    this.calculateTotalPrice();
  }

  productClicked(product: any) {
    this.router.navigate(['/productDetails/' + product.id]);
  }

  // deleteProduct(product: Products) {
  //   this.http.getUser(Number(localStorage.getItem("loginUserId"))).subscribe((user) => {

  //     user.addtocart = user.addtocart.filter((item) => {return item.id !== product.id});
  //     console.log(user.addtocart)


  //     this.http.updateUser(Number(localStorage.getItem("loginUserId")), user).subscribe(() => {

  //       this.cartItems = user.addtocart;

  //     }, (error) => {
  //       console.error("Error updating user data:", error);
  //     });
  //   }, (error) => {
  //     console.error("Error fetching user data:", error);
  //   });
  // }


  deleteProduct(item: Products) {

    this.http.getUser(Number(localStorage.getItem("loginUserId"))).subscribe((user) => {
      const index = user.addtocart.indexOf(item)


      user.addtocart.splice(index, 1);


      this.http.updateUser(Number(localStorage.getItem("loginUserId")), user).subscribe(
        () => {
          const index = this.cartItems.indexOf(item)
          this.cartItems.splice(index, 1);

        },
        (error) => {
          console.error("Error from wishlist.ts:", error);
        }
      );
    });

  }

  placeOrder() {
    let productsFromCart = this.ps.cartProducts;
    let pushToBuyProducts: Products[] = _.cloneDeep(productsFromCart);
    this.ps.clearBuyProducts();
    this.ps.buyProducts = pushToBuyProducts;
    this.router.navigate(['buynow']);
  }

  saveForLater(product: Products) {

    this.http.getUser(Number(localStorage.getItem("loginUserId"))).subscribe((user) => {
      console.log(user)
      let currentUser = user
      currentUser.savelater = []

      currentUser.savelater.push(product)
      // console.log(user)
      // this.deleteProduct(product)
      // console.log(user)

      this.http.updateUser(Number(localStorage.getItem("loginUserId")), currentUser).subscribe((user) => {
        console.log(user)
      })
    })



  }
}
