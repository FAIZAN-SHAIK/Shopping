import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './all-products/all-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsRoutngModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterProductsPipe } from './filter-products.pipe';
import { BuyNowComponent } from './buy-now/buynow.component';

import { UserRoutingModule } from '../User/userRouting.module';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HttpClientModule } from  '@angular/common/http';




@NgModule({
  declarations: [
    AllProductsComponent,
    ProductDetailsComponent,
    FilterProductsPipe,
    BuyNowComponent,
    



  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutngModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule,
    MatPaginatorModule,
    HttpClientModule,
    
    

  ]
})
export class ProductsModule { }
