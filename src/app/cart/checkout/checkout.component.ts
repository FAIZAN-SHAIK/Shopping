import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';
import { login } from 'src/app/login';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  totalPrice: number = 0;
  randomOrderId = this.generateRandomOrderId();

  constructor(
    private activated: ActivatedRoute,
    private router: Router,
    private ps: ProductsService,
    private http: HttpService
  ) {}
  ngOnInit(): void {
    this.activated.params.subscribe((data) => {
      this.totalPrice = data['price'];
    });
  }
  generateRandomOrderId(): string {
    const randomNum = Math.floor(Math.random() * 1000000); // You can adjust the range as needed
    const orderId = `#${randomNum.toString().padStart(6, '0')}`;
    return orderId;
  }

  gotoOrders() {
    this.http
      .getUser(Number(localStorage.getItem('loginUserId')))
      .subscribe((user: login) => {
        user.addtocart.forEach((x) => {
          x.OrderId = this.randomOrderId;
          user.orders.push(x);
          console.log(x);
          console.log(user.orders);
        });
        user.addtocart = [];

        this.http
          .updateUser(Number(localStorage.getItem('loginUserId')), user)
          .subscribe((x) => {
            this.ps.updateCartLength();

            this.router.navigate(['user/order']);
          });
      });
  }
}
