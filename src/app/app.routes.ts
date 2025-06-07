import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    {path:'',component:HomeComponent,title:"home"},
    {path:'products',component:ProductComponent,title:"products",
        children:[
            {path:"details/:productId",component:ProductdetailComponent},
            {path:"add-product",component:AddproductComponent}
        ]},
    {path:'profile',component:ProfileComponent,title:"profile"},
    {path:'dashboard',component:DashboardComponent,title:"dashboard"},
    {path:"**",component:NotfoundComponent}
];
