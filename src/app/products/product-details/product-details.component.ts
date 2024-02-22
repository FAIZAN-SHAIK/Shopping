// import { addTocart } from './../../login';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/products.service';
import { Products } from 'src/app/products.class';
import { AppService } from 'src/app/app.service';
import { SharedService } from 'src/app/shared/auth.service';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  productId!: number;
  product!: Products;
  similarProducts: Products[] = [];
  wishListBtn = '♡';
  selectedSize: string | null = null;

  ratings: number = Math.floor(Math.random() * (1000 - 500 + 1)) + 100;
  reviews: number = Math.floor(Math.random() * (200 - 100 + 1)) + 100;
  ratingStar: number = +(Math.random() * (5 - 1.5) + 1.5).toFixed(1);
  discount: number = Math.floor(Math.random() * (15 - 10 + 1)) + 10;
  price: number = 0;
  freeDelvery: number = Math.floor(Math.random());

  showNotification: boolean = false;
  addtoCartNotClicked: boolean = true;
  sizeSelected: boolean = false;
  productWithSameDetailsFound: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ps: ProductsService,
    private aS: AppService,
    private ss: SharedService,
    private http: HttpService
  ) {
    if (this.ps.didItemAddedToCart) {
      this.addtoCartNotClicked = false;
    } else {
      this.addtoCartNotClicked = true;
    }
  }

  goBack() {
    this.router.navigate(['/products']);
  }

  showSimilarItems() {
    this.http.getProducts().subscribe((x) => {
      this.similarProducts = x.filter(
        (prod) =>
          prod.gender === this.product?.gender &&
          prod.type === this.product.type
      );
    });

    const itemToRemove = this.similarProducts.findIndex(
      (item) => item.id === this.productId
    );

    if (itemToRemove !== -1) {
      this.similarProducts.splice(itemToRemove, 1);
    }
  }

  productClicked(item: Products) {
    this.router.navigate(['productDetails/' + item.id]);

    // const isProductInArray = this.ps.cartProducts.some((product) => {
    //   return product.id === item.id;
    // });

    // if (isProductInArray) {
    //   this.addtoCartNotClicked = false;
    // } else {
    //   this.addtoCartNotClicked = true;
    // }
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((data) => {
      this.productId = Number(data.get('id'));

      this.http
        .getProduct(this.productId)
        .subscribe((x) => this.product = x);

      if (this.product) {
        this.price =
          this.product.price - this.product.price * (this.discount / 100);
      }
    });
  }

  wishlistClicked() {
    if (Number(localStorage.getItem("loginUserId")) === 0) {
      this.router.navigate(['/login']);
    } else {
      this.http
        .getUser(Number(localStorage.getItem('loginUserId')))
        .subscribe((x) => {
          const currentUserDetails = x;
          const existingCartItem = currentUserDetails.wishlist.find((x) => {
            return x.id === this.product.id;
          });

          if (existingCartItem) {
            this.product.wishlist = false;
            currentUserDetails.wishlist = currentUserDetails.wishlist.filter(
              (item) => {
                return item.id !== existingCartItem.id;
              }
            );
          } else {
            this.product.wishlist = true;
            currentUserDetails.wishlist.push(this.product);
          }

          this.http
            .updateUser(
              Number(localStorage.getItem('loginUserId')),
              currentUserDetails
            )
            .subscribe(
              (response) => { },
              (error) => console.log(error)
            );
        });
    }
  }

  sizeClicked(size: string) {
    this.selectedSize = size;
    this.addtoCartNotClicked = true;
  }

  addToCartClicked() {
    if (Number(localStorage.getItem("loginUserId")) === 0) {
      
      this.router.navigate(['/login']);
    } else {
      if (this.selectedSize === null) {
        this.sizeSelected = true;
      } else {
        this.showNotification = true;
        this.addtoCartNotClicked = false;
        this.sizeSelected = false;

        const currentUserId = Number(localStorage.getItem('loginUserId'));

        this.http.getUser(currentUserId).subscribe((user) => {
          let currentUserDetails = user;

          if (this.selectedSize) {
            this.product.selectedSize = this.selectedSize;
          }

          const existingCartItem = currentUserDetails.addtocart.find((x) => {
            return (
              this.product.id === x.id &&
              this.product.selectedSize === x.selectedSize
            );
          });
          console.log(existingCartItem);

          if (existingCartItem) {
            existingCartItem.quantity++;
          } else {
            this.product.quantity = 1;
            currentUserDetails.addtocart.push(this.product);
          }

          this.http
            .updateUser(currentUserId, currentUserDetails)
            .subscribe((response) => {
              this.ps.updateCartLength();
            });
        });
      }

      setTimeout(() => {
        this.showNotification = false;
      }, 2000);
    }
  }

  buyNow() {
    // if (this.selectedSize) {
    //   let addProductToBuy = this.ps.AllProducts.find((x) => {
    //     return x.id === this.productId;
    //   });

    //   let addItemToBuy = { ...addProductToBuy };
    //   addItemToBuy.selectedSize = this.selectedSize;
    //   addItemToBuy.quantity = 1;
    //   this.ps.clearBuyProducts();
    //   this.ps.buyProducts.push(addItemToBuy as Products);
    //   this.router.navigate(['buynow']);
    // } else {
    //   this.sizeSelected = true;
    // }
  }

  gotoCartClicked() {
    this.router.navigate(['/cartpage']);
  }

  scrollToTop() {
    // Scroll to the top of the page
    window.scrollTo({ top: 0 });
  }
}
