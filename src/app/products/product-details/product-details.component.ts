import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/products.service';
import { Products } from 'src/app/products.class';
import { AppService } from 'src/app/app.service';
import { SharedService } from 'src/app/shared/auth.service';


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
  selectedSize : string | null = null

  ratings: number = Math.floor(Math.random() * (1000 - 500 + 1)) + 100;
  reviews: number = Math.floor(Math.random() * (200 - 100 + 1)) + 100;
  ratingStar: number = +(Math.random() * (5 - 1.5) + 1.5).toFixed(1);
  discount: number = Math.floor(Math.random() * (60 - 10 + 1)) + 10;
  price: number;
  freeDelvery: number = Math.floor(Math.random())

  showNotification: boolean = false;
  addtoCartNotClicked: boolean = true;
  sizeSelected : boolean = false;
  productWithSameDetailsFound : boolean = false;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private companyDetailsService: ProductsService,
    private aS:AppService,
    private ss:SharedService

  ) {
    
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

    if(!this.ss.isUserLoggedIn){
      this.router.navigate(['/login'])
    }
    else{
      this.companyDetailsService.AllProducts.find((x) => {
        if (x.id === this.prodDetails[0].id) {
          x.wishlist = !x.wishlist;
  
        }
      })
    }
    
  }

  sizeClicked( size : string){
    this.selectedSize = size;
    this.addtoCartNotClicked = true;
  }

  addToCartClicked() {

    if(!this.ss.isUserLoggedIn){
      this.router.navigate(['/login'])
    }
    else{

      if(this.selectedSize === null){
        this.sizeSelected = true;
      }
      else{
      this.showNotification = true;
      this.addtoCartNotClicked = false;
      this.sizeSelected = false;
  
      let addedProductToCart = this.companyDetailsService.AllProducts.find((x) => {
        return x.id === this.productIdFromProducts;
      });
        addedProductToCart.selectedSize = this.selectedSize;
  
        this.companyDetailsService.cartProducts.find((x)=>{
          if(addedProductToCart.id === x.id && addedProductToCart.selectedSize === x.selectedSize){
            x.quantity++;
            this.productWithSameDetailsFound = true;
          }
        })
  
        if(!this.productWithSameDetailsFound){
          addedProductToCart.quantity = 1
          let addItemToCart = {...addedProductToCart}
          this.companyDetailsService.cartProducts.push(addItemToCart);
        }

    }


    

      

      

    


    setTimeout(() => {
      this.showNotification = false;
    }, 2000)
    }

    



  }

  buyNow(){
    this.router.navigate(['buynow/'+this.prodDetails[0].id])
  }


  gotoCartClicked() {
    this.router.navigate(['/cartpage'])
  }



}
