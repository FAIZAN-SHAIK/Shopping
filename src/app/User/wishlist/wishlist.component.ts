import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AppService } from "src/app/app.service";
import { Products } from "src/app/products.class";
import { ProductsService } from "src/app/products.service";

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})

export class WishlistComponent {
  wishListBtn = '♡'

  // wishlistOfUser: Products[];

  constructor(
    private wishlistProductsService: ProductsService,
    private router: Router) {

    // this.wishlistOfUser = this.wishlistProductsService.AllProducts.filter((x) => {
    //   return x.wishlist === true
    // })

  }

  productClicked(item: any) {
    this.router.navigate(['productDetails/' + item.id])

  }

  // wishlistClicked(item: any) {
  //   this.wishlistProductsService.AllProducts.find((x) => {
  //     if (x.id === item.id) {
  //       x.wishlist = !x.wishlist;
  //     }
  //   })

  //   let itemToBeRemoved = this.wishlistOfUser.indexOf(item)
  //   this.wishlistOfUser.splice(itemToBeRemoved, 1)
  // }

  onAddToWishlist() {
    this.router.navigate(['/products'])
  }

}
