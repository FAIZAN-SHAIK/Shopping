import { NgModule } from "@angular/core";
import { CartPageComponent } from "./cartPage/cartpage.component";
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";
import { CartRoutingModule } from "./cart-routing.module";
import { CommonModule } from "@angular/common";


@NgModule({
  declarations: [CartPageComponent


  ],
  imports: [RouterModule, SharedModule, CartRoutingModule,
    CommonModule




  ],
  providers: [],
  exports: [


  ]
})
export class CartModule {

}
