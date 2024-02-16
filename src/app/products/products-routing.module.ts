import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AllProductsComponent } from "./all-products/all-products.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { BuyNowComponent } from "./buy-now/buynow.component";
import { CanActivate } from "../auth.guard";
import { CheckoutComponent } from "./checkout/checkout.component";

const routes: Routes = [

  { path: 'products', component: AllProductsComponent },
  { path: 'productDetails/:product', component: ProductDetailsComponent },
  { path: 'buynow', component: BuyNowComponent, canActivate: [CanActivate] },
  { path: 'checkout/:price', component: CheckoutComponent }

  // {path:'**',component:HomeComponent}
]

@NgModule({

  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]

})

export class ProductsRoutngModule {

}
