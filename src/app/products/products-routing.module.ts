import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AllProductsComponent } from "./all-products/all-products.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";

const routes : Routes = [

  {path:'products',component:AllProductsComponent},
  {path:'product-details',component:ProductDetailsComponent},
]

@NgModule({

  imports:[
    RouterModule.forChild(routes)
  ]

})

export class ProductsRoutngModule{

}
