import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector:'app-checkout',
    templateUrl:'./checkout.component.html',
    styleUrls:['./checkout.component.css']

})

export class CheckoutComponent implements OnInit{

    totalPrice : number;
    randomOrderId = this.generateRandomOrderId();

    constructor(
        private activated : ActivatedRoute,
        private router : Router
    ){

    }
    ngOnInit(): void {
        this.activated.params.subscribe((data)=>{
            this.totalPrice = data['price']
        })
        
    }
    generateRandomOrderId(): string {
        const randomNum = Math.floor(Math.random() * 1000000); // You can adjust the range as needed
        const orderId = `#${randomNum.toString().padStart(6, '0')}`;
        return orderId;
    }
    

      gotoOrders(){
        this.router.navigate(['user/order'])
      }

    

}