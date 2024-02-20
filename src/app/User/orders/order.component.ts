import { Component, OnInit } from "@angular/core";
import { HttpService } from "src/app/http.service";
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
        private ps : ProductsService,
        private http : HttpService
    ){
        
        this.http.getUser(Number(localStorage.getItem("loginUserId"))).subscribe((user)=>{
            this.userorders = user.orders

        })
        
    }
    ngOnInit(): void {
        this.totalPrice = this.calculateTotal();
    }

    productClicked(product: Products){

    }
   

    cancelOrder(product: Products){
        this.http.getUser(Number(localStorage.getItem("loginUserId"))).subscribe((user)=>{

            const cancleProductIndex = user.orders.findIndex(x => x.id === product.id)
            user.orders.splice(cancleProductIndex,1)

            this.http.updateUser(Number(localStorage.getItem("loginUserId")),user).subscribe(()=>{
                const index = this.userorders.indexOf(product);
              this.userorders.splice(index, 1);

            })

        })
        

    }
    calculateTotal() {
        return this.ps.buyProducts.reduce((total, product) => total + product.price, 0);
      }

}