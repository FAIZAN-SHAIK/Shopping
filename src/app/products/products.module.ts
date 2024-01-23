import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './all-products/all-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsRoutngModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterProductsPipe } from './filter-products.pipe';
import { BuyNowComponent } from './buy-now/buynow.component';
import { ChangeAddress } from './buy-now/change address/changeAddress.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { UserRoutingModule } from '../User/userRouting.module';



@NgModule({
  declarations: [
    AllProductsComponent,
    ProductDetailsComponent,
    FilterProductsPipe,
    BuyNowComponent,
    ChangeAddress,
    CheckoutComponent,




  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutngModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule


  ]
})
export class ProductsModule { }
