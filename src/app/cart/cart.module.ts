import { NgModule } from "@angular/core";
import { CartPageComponent } from "./cartPage/cartpage.component";
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";
import { CartRoutingModule } from "./cart-routing.module";


@NgModule({
  declarations: [CartPageComponent


  ],
  imports: [RouterModule, SharedModule, CartRoutingModule




  ],
  providers: [],
  exports: [


  ]
})
export class CartModule {

}
