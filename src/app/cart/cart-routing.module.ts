import { NgModule } from "@angular/core";
import { Router, RouterModule, RouterOutlet, Routes } from "@angular/router";
import { CartPageComponent } from "./cartPage/cartpage.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { ChangeAddress } from "./change address/changeAddress.component";

const routes: Routes = [
  { path: 'cartpage', component: CartPageComponent },
  {path:'changeAddress',component:ChangeAddress},
  { path: 'checkout/:price', component: CheckoutComponent }
]

@NgModule({

  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CartRoutingModule {
  
}
