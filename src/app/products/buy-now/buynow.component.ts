import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { login } from 'src/app/login';
import { Products } from 'src/app/products.class';
import { ProductsService } from 'src/app/products.service';
import { SharedService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-buynow',
  templateUrl: './buynow.component.html',
  styleUrls: ['./buynow.component.css'],
})
export class BuyNowComponent implements OnInit {
  buyProducts: Products[];
  totalPrice: number;
  userAddress : string[];
  mobileNumber : number;


  proceedClicked = false;
  changeAddressClicked = false


  constructor(
    private ps: ProductsService,
    private ss: SharedService,
    private as: AppService,
    private router: Router
  ) {
    this.buyProducts = ps.buyProducts;
     
    
  }
    ngOnInit(): void {
        
        // console.log(this.userAddress)
        this.addressData()
    }

    addressData(){
        this.as.predefinedLoginDetails.find((x)=>{
            if(x.firstname.toLowerCase() === this.ss.userLoggedInName.toLowerCase()){
                this.userAddress =  x.address.split(',')
                this.mobileNumber =  x.mobile
            }
        })
    }
        



  calculateTotalPrice() {
    this.totalPrice = this.buyProducts.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
    return this.totalPrice;
  }

  increaseQuantity(product: any) {
    product.quantity++;
    this.calculateTotalPrice();
  }
  decreaseQuantity(product: any) {
    if (product.quantity > 1) {
      product.quantity--;
      this.calculateTotalPrice();
    }
    if (product.quantity === 0) {
      const index = this.buyProducts.indexOf(product);
      if (index !== -1) {
        this.buyProducts.splice(index, 1);
      }
    }
  }

  productClicked(product: any) {
    this.router.navigate(['/productDetails/' + product.id]);
  }

  deleteProduct(product: any) {
    const index = this.buyProducts.indexOf(product);
    if (index !== -1) {
      this.buyProducts.splice(index, 1);
    }
  }

  proceed() {
    this.proceedClicked = true;
    
  }

  checkout(){

    const productsToaddToOrders = this.buyProducts

    this.ps.orders = {...productsToaddToOrders}

    this.router.navigate(['checkout/'+this.totalPrice])
  }

  changeAddress(){
    this.changeAddressClicked = true; 
  }
  receiveMessage(value : any){
    if(value){
        this.addressData()
    }
    this.changeAddressClicked = false
  }
}
