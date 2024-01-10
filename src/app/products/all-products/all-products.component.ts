import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/products.class';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  allProducts: Products[];
  productSearched : string = ''

  constructor(private productsService: ProductsService) {
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
    this.allProducts = this.productsService.AllProducts.filter((x)=>x.type.toLowerCase() === 'tshirt')
  }
  onJeansClicked() {
    this.allProducts = this.productsService.AllProducts.filter((x)=>x.type.toLowerCase() === 'jeans')
  }

  ngOnInit(): void {
  }

}
