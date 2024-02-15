import { NgModule } from "@angular/core";
import { CartPageComponent } from "./cartPage/cartpage.component";
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";
import { CartRoutingModule } from "./cart-routing.module";
import { CommonModule } from "@angular/common";
import { SaveLaterComponent } from "./saveLater/savelater.component";
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [CartPageComponent, SaveLaterComponent


  ],
  imports: [RouterModule, SharedModule, CartRoutingModule,
    CommonModule,TableModule,ButtonModule




  ],
  providers: [],
  exports: [


  ]
})
export class CartModule {

}
