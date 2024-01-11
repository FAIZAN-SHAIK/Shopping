import { NgModule } from "@angular/core";
import { UserComponent } from "./user/user.component";
import { OrderComponent } from "./orders/order.component";
import { ProfileComponent } from "./profile/profile.component";
import { SettingsComponent } from "./settings/settings.component";
import { WishlistComponent } from "./wishlist/wishlist.component";
import { UserRoutingModule } from "./userRouting.module";
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";


@NgModule({
    declarations:[
        UserComponent,
        OrderComponent,
        ProfileComponent,
        SettingsComponent,
        WishlistComponent
    ],
    imports:[
        UserRoutingModule,
        SharedModule,
        RouterModule
    ]
})
export class userModule{

}