import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/app/products.class';
import { ProductsService } from 'src/app/products.service';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  productIdFromProducts: number;
  prodDetails: Products[];
  similarProducts: Products[];
  wishListBtn = '♡'

  ratings: number = Math.floor(Math.random() * (1000 - 500 + 1)) + 100;
  reviews: number = Math.floor(Math.random() * (200 - 100 + 1)) + 100;
  ratingStar: number = +(Math.random() * (5 - 1.5) + 1.5).toFixed(1);
  discount: number = Math.floor(Math.random() * (60 - 10 + 1)) + 10;
  price: number;
  freeDelvery: number = Math.floor(Math.random())

  showNotification: boolean = false;
  addtoCartNotClicked: boolean = true;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private companyDetailsService: ProductsService

  ) {
    console.log(companyDetailsService.didItemAddedToCart)
    if (this.companyDetailsService.didItemAddedToCart) {
      this.addtoCartNotClicked = false
    }
    else {
      this.addtoCartNotClicked = true
    }
  }

  goBack() {
    this.router.navigate(['/products']);
  }

  showSimilarItems() {
    this.similarProducts = this.companyDetailsService.AllProducts.filter(
      (x) => {
        return (
          x.gender === this.prodDetails[0].gender &&
          x.type === this.prodDetails[0].type

        );
      }
    );

    const itemToRemove = this.similarProducts.findIndex(item => item.id === this.productIdFromProducts);

    if (itemToRemove !== -1) {
      this.similarProducts.splice(itemToRemove, 1);
    }
  }

  productClicked(item: Products) {
    this.router.navigate(['productDetails/' + item.id]);

    const isProductInArray = this.companyDetailsService.cartProducts.some((product) => {
      return product.id === item.id;
    });

    if (isProductInArray) {
      this.addtoCartNotClicked = false

    } else {
      this.addtoCartNotClicked = true

    }
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((data) => {
      this.productIdFromProducts = +data.get('id');

      this.prodDetails = this.companyDetailsService.AllProducts.filter((x) => {
        return x.id === this.productIdFromProducts;
      });
      this.price = this.prodDetails[0].price - (this.prodDetails[0].price * (this.discount / 100))

    });
  }

  wishlistClicked() {
    this.companyDetailsService.AllProducts.find((x) => {
      if (x.id === this.prodDetails[0].id) {
        x.wishlist = !x.wishlist;

      }
    })
  }

  addToCartClicked() {

    this.showNotification = true;
    this.addtoCartNotClicked = false;

    let addedProductToCart = this.companyDetailsService.AllProducts.find((x) => {
      return x.id === this.productIdFromProducts;
    });



    if (addedProductToCart) {
      // Check if cartProducts is undefined and initialize it as an empty array if needed
      if (!this.companyDetailsService.cartProducts) {
        this.companyDetailsService.cartProducts = [];
      }

      this.companyDetailsService.cartProducts.push(addedProductToCart);
    }


    setTimeout(() => {
      this.showNotification = false;
    }, 2000)



  }


  gotoCartClicked() {
    this.router.navigate(['/cartpage'])
  }



}
