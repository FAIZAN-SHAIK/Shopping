import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './all-products/all-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HeaderComponent } from '../components/header/header.component';
import { AppModule } from '../app.module';



@NgModule({
  declarations: [
    AllProductsComponent,
    ProductDetailsComponent,

  ],
  imports: [
    CommonModule,


  ]
})
export class ProductsModule { }
