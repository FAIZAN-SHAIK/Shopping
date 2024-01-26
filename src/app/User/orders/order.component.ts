import { Component, OnInit } from "@angular/core";
import { Products } from "src/app/products.class";
import { ProductsService } from "src/app/products.service";

@Component({
    selector:'app-order',
    templateUrl:'./order.component.html',
    styleUrls:['./order.component.css']
})
export class OrderComponent implements OnInit{
    userorders : Products[]=[];
    totalPrice: number =0;

    constructor(
        private ps : ProductsService
    ){
        this.userorders = ps.orders
        
    }
    ngOnInit(): void {
        this.totalPrice = this.calculateTotal();
    }

    productClicked(product: Products){

    }
   

    cancelOrder(product: Products){
        const cancleProductIndex = this.userorders.indexOf(product)
        this.userorders.splice(cancleProductIndex,1)

    }
    calculateTotal() {
        return this.ps.buyProducts.reduce((total, product) => total + product.price, 0);
      }

}