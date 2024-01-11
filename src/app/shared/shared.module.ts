import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { ProductsRoutngModule } from "../products/products-routing.module";
import { AppRoutingModule } from "../app-routing.module";

import { CommonModule } from "@angular/common";
import { UserRoutingModule } from "../User/userRouting.module";


@NgModule({
    declarations:[
        HeaderComponent,
        
    ],
    imports:[
        ProductsRoutngModule,
        AppRoutingModule,
        CommonModule,
        UserRoutingModule,
        
        
    ],
    providers:[],
    exports:[
        HeaderComponent,

    ]
})
export class SharedModule{

}