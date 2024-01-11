import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AllProductsComponent } from "./all-products/all-products.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { HomeComponent } from "../components/home/home.component";

const routes : Routes = [

  {path:'products',component:AllProductsComponent},
  {path:'productDetails/:id',component:ProductDetailsComponent},
  {path:'**',component:HomeComponent}
]

@NgModule({

  imports:[
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]

})

export class ProductsRoutngModule{

}
