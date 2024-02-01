import { Component, NgModule } from "@angular/core";
import { UserComponent } from "./user/user.component";
import { RouterModule, Routes } from "@angular/router";
import { OrderComponent } from "./orders/order.component";
import { ProfileComponent } from "./profile/profile.component";
import { SettingsComponent } from "./settings/settings.component";
import { WishlistComponent } from "./wishlist/wishlist.component";

const routes: Routes = [
  {
    path: 'user', component: UserComponent, children: [
      { path: 'order', component: OrderComponent },
      { path: 'profile', component: ProfileComponent,canDeactivate :[(comp : ProfileComponent)=>{return comp.canExit()}] },
      { path: 'settings', component: SettingsComponent },
      { path: 'wishlist', component: WishlistComponent }
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]

})

export class UserRoutingModule {

}
