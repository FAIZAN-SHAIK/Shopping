import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AppService } from "src/app/app.service";
import { HttpService } from "src/app/http.service";
import { login } from "src/app/login";
import { Products } from "src/app/products.class";
import { ProductsService } from "src/app/products.service";

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})

export class WishlistComponent {
  wishListBtn = '♡'

  wishlistOfUser!: Products[];

  constructor(
    private wishlistProductsService: ProductsService,
    private router: Router,
    private http: HttpService) {

      this.getWishListData();
     
 }

 getWishListData(){
  this.http.getUser(Number(localStorage.getItem("loginUserId"))).subscribe((user)=>{
    this.wishlistOfUser = user.wishlist

  })

 }

  

  wishlistClicked(item: Products) {

    this.http.getUser(Number(localStorage.getItem("loginUserId"))).subscribe((user : login) => {
      user.wishlist = user.wishlist.filter(wishlistItem => wishlistItem.id !== item.id);
      this.http.updateUser(Number(localStorage.getItem("loginUserId")), user).subscribe(
        () => {
          
          
          this.wishlistOfUser = this.wishlistOfUser.filter(wishlistItem => wishlistItem.id !== item.id);
        },
        (error) => {
          console.error("Error from wishlist.ts:", error);
        }
      );
    });
   
  }

  onAddToWishlist() {
    this.router.navigate(['/products'])
  }

  productClicked(item: any) {
    this.router.navigate(['productDetails/' + item.id])

  }

}
