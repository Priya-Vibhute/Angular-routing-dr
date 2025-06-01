import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'products',component:ProductComponent},
    {path:'profile',component:ProfileComponent},
    {path:'dashboard',component:DashboardComponent}
];
