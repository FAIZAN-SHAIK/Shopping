import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'lodash';
import { Products } from 'src/app/products.class';
import { ProductsService } from 'src/app/products.service';
import { SharedService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  allProducts: Products[];
  productSearched: string = ''
  wishListBtn = '♡'

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute,
    private ss: SharedService) {
    this.allProducts = productsService.AllProducts
    // console.log(this.allProducts)
  }

  filterBy(criteria: string): void {
    switch (criteria) {
      case 'priceHtoL':
        this.allProducts = [...this.productsService.AllProducts].sort((a, b) => b.price - a.price);
        break;
      case 'priceLtoH':
        this.allProducts = [...this.productsService.AllProducts].sort((a, b) => a.price - b.price);
        break;
        break;
      case 'men':
        this.allProducts = this.productsService.AllProducts.filter(product => product.gender === 'male');
        break;
      case 'women':
        this.allProducts = this.productsService.AllProducts.filter(product => product.gender === 'female');
        break;

    }
  }

  onTagClicked(tag: string) {
    if (tag === 'all') {
      this.allProducts = this.productsService.AllProducts
    }
    else {
      this.allProducts = this.productsService.AllProducts.filter(x => x.type.toLowerCase() === tag);
    }
  }


  productClicked(value: Products) {
    this.router.navigate(['productDetails/' + value.id])

    const isProductInArray = this.productsService.cartProducts.some((product) => {
      return product.id === value.id;
    });

    if (isProductInArray) {
      this.productsService.didItemAddedToCart = true

    } else {
      this.productsService.didItemAddedToCart = false

    }
  }

  wishlistClicked(value: any) {

    if (!this.ss.isUserLoggedIn) {
      this.router.navigate(['/login'])
    }
    else {
      this.productsService.AllProducts.find((x) => {
        if (x.id === value.id) {
          x.wishlist = !x.wishlist;
        }
      })
    }


  }


  ngOnInit(): void {
  }

}
