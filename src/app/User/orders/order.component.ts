import { Component } from "@angular/core";
import { Products } from "src/app/products.class";
import { ProductsService } from "src/app/products.service";

@Component({
    selector:'app-order',
    templateUrl:'./order.component.html',
    styleUrls:['./order.component.css']
})
export class OrderComponent{
    userorders : Products[]

    constructor(
        private ps : ProductsService
    ){
        this.userorders = ps.orders
        console.log(this.userorders)

    }

}