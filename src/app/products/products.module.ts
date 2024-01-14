import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './all-products/all-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsRoutngModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { FilterProductsPipe } from './filter-products.pipe';



@NgModule({
  declarations: [
    AllProductsComponent,
    ProductDetailsComponent,
    FilterProductsPipe


  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutngModule,
    FormsModule


  ]
})
export class ProductsModule { }
