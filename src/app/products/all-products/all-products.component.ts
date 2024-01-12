import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/app/products.class';
import { ProductsService } from 'src/app/products.service';

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
    private route: ActivatedRoute) {
    this.allProducts = productsService.AllProducts
    // console.log(this.allProducts)
  }

  onAllClicked() {
    this.allProducts = this.productsService.AllProducts
  }

  onShirtsClicked() {

    this.allProducts = this.productsService.AllProducts.filter(x => x.type.toLowerCase() === "shirt");
  }

  onTshirtsClicked() {
    this.allProducts = this.productsService.AllProducts.filter((x) => x.type.toLowerCase() === 'tshirt')
  }
  onJeansClicked() {
    this.allProducts = this.productsService.AllProducts.filter((x) => x.type.toLowerCase() === 'jeans')
  }


  productClicked(value: Products) {
    this.router.navigate(['productDetails/' + value.id])
  }

  wishlistClicked(value: any) {
    this.productsService.AllProducts.find((x) => {
      if (x.id === value.id) {
        x.wishlist = !x.wishlist;
      }
    })

  }


  ngOnInit(): void {
  }

}
