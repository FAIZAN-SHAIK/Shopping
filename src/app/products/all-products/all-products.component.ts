import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';
import { map } from 'rxjs';
import { HttpService } from 'src/app/http.service';
import { Products } from 'src/app/products.class';
import { ProductsService } from 'src/app/products.service';
import { SharedService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  allProducts: Array<Products> = [];
  mainProducts: Array<Products> = [];
  showByUserCategory: string = '';
  productSearched: string = ''
  wishListBtn = '♡';
  lowValue: number = 0;
  highValue: number = 10;
  pageIndex: number = 0;

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute,
    private ss: SharedService,
    private httpService: HttpService
  ) {

    this.httpService.getProducts().subscribe((x: Products[]) => {
      [...this.mainProducts] = x
      this.allProducts = _.cloneDeep([...this.mainProducts])
    })



  }

  filterBy(criteria: string) {
    this.allProducts = this.productsService.filterProducts(criteria, [...this.mainProducts])
  }

  onPageChanged(event: PageEvent) {
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    return event;
  }

  onTagClicked(tag: string) {
    this.allProducts = this.productsService.filterProducts(tag, [...this.mainProducts])
  }


  productClicked(product: Products) {
    const serializedProduct = JSON.stringify(product);
    this.router.navigate(['product-details/', { product: serializedProduct }]);
    // this.router.navigate(['productDetails/' + value])

    const isProductInCartArray = this.productsService.cartProducts.some((product) => {
      return product.id === value.id;
    });

    if (isProductInCartArray) {
      this.productsService.didItemAddedToCart = true

    } else {
      this.productsService.didItemAddedToCart = false

    }
  }

  wishlistClicked(value: Products) {

    if (!this.ss.isUserLoggedIn) {
      this.router.navigate(['/login'])
    }
    else {
      this.allProducts.find((x) => {
        if (x.id === value.id) {
          x.wishlist = !x.wishlist;
        }
      })
    }


  }

  filterProductsByHomeCategory(): void {
    if (this.showByUserCategory) {
      this.allProducts = this.productsService.filterProducts(this.showByUserCategory, this.mainProducts);
    } else {
      this.allProducts = this.productsService.filterProducts('all', this.mainProducts);
    }
  }




  ngOnInit(): void {
    this.httpService.getProducts().pipe(
      map((x: Products[]) => {
        this.mainProducts = x;
        this.allProducts = _.cloneDeep(this.mainProducts);
        return this.route.snapshot.queryParams['category'];
      })
    ).subscribe((category: string) => {
      this.showByUserCategory = category;
      this.filterProductsByHomeCategory();
    });
  }
}


