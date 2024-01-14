import { NgModule } from "@angular/core";
import { RouterModule, RouterOutlet, Routes } from "@angular/router";
import { CartPageComponent } from "./cartPage/cartpage.component";

const routes: Routes = [
  { path: 'cartpage', component: CartPageComponent }
]

@NgModule({

  declarations: [],
  imports: [RouterModule.forChild(routes)]

})

export class CartRoutingModule {

}
