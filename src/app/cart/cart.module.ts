import { NgModule } from "@angular/core";
import { CartPageComponent } from "./cartPage/cartpage.component";
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";
import { CartRoutingModule } from "./cart-routing.module";
import { CommonModule } from "@angular/common";
import { SaveLaterComponent } from "./saveLater/savelater.component";
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { ChangeAddress } from "./change address/changeAddress.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { ReactiveFormsModule } from "@angular/forms";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';




@NgModule({
  declarations: [CartPageComponent, SaveLaterComponent,ChangeAddress,
    CheckoutComponent,


  ],
  imports: [RouterModule, SharedModule, CartRoutingModule,
    CommonModule, TableModule, ButtonModule, DataViewModule,
    ReactiveFormsModule,MatButtonModule,
    MatStepperModule,MatFormFieldModule,
    MatInputModule




  ],
  providers: [],
  exports: [


  ]
})
export class CartModule {

}
