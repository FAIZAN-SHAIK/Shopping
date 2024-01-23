import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { ProductsRoutngModule } from "../products/products-routing.module";
import { AppRoutingModule } from "../app-routing.module";

import { CommonModule } from "@angular/common";
import { UserRoutingModule } from "../User/userRouting.module";
import { CartRoutingModule } from "../cart/cart-routing.module";
import { NotificationComponent } from "./notification/notification.component";
import { FooterComponent } from "./footer/footer.component";


@NgModule({
  declarations: [
    HeaderComponent,
    NotificationComponent,
    FooterComponent


  ],
  imports: [
    ProductsRoutngModule,
    AppRoutingModule,
    CommonModule,
    UserRoutingModule,
    CartRoutingModule,




  ],
  providers: [],
  exports: [
    HeaderComponent,
    NotificationComponent,
    FooterComponent

  ]
})
export class SharedModule {

}
