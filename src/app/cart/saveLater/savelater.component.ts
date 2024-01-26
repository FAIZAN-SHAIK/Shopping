import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Products } from "src/app/products.class";
import { ProductsService } from "src/app/products.service";
import * as _ from 'lodash';

@Component({
  selector: "app-savelater",
  templateUrl: './savelater.component.html',
  styleUrls: ['./savelater.component.css']
})

export class SaveLaterComponent {
  saveLaterProducts: Products[] = []

  constructor
  (
    private ps: ProductsService,
    private router: Router
  ) {
    this.saveLaterProducts = ps.savelater
  }

  productClicked(product : Products) {
    this.router.navigate(['/products'])
  }

  addToCart(product: any) {
    const productToAddToCartFromSaveLater = _.cloneDeep(product)
    this.ps.cartProducts.push(productToAddToCartFromSaveLater)
    const index = this.saveLaterProducts.indexOf(product)
    this.ps.savelater.splice(index, 1)
  }

  deleteProduct(product : Products) {
    const index = this.saveLaterProducts.indexOf(product)
    this.ps.savelater.splice(index, 1)
  }

}
