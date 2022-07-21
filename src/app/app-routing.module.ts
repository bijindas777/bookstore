import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Bookcard1Component } from './bookcard1/bookcard1.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'',component:SigninComponent
  },
  {
    path:'home',component:HomeComponent
  
  },
  {
    path:'bookcard1',component:Bookcard1Component
  
  },
  {
    path:'cart',component:CartComponent
  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
