import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AllProductsComponent } from "./all-products/all-products.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { HomeComponent } from "../components/home/home.component";
import { BuyNowComponent } from "./buy-now/buynow.component";
import { CanActivate } from "../auth.guard";

const routes: Routes = [

  { path: 'products', component: AllProductsComponent },
  { path: 'productDetails/:id', component: ProductDetailsComponent},
  {path:'buynow/:id', component:BuyNowComponent,canActivate:[CanActivate]}
   
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
