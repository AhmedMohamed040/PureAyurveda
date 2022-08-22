import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { ServicesComponent } from './views/services/services.component';
import { ContactComponent } from './views/contact/contact.component';
import { BlogComponent } from './views/blog/blog.component';
import { ProfileComponent } from './views/profile/profile.component';
import { CheckoutComponent } from './views/checkout/checkout.component';
import { BlogsingleComponent } from './views/blogsingle/blogsingle.component';
import { CartComponent } from './views/cart/cart.component';
import { CommonModule } from '@angular/common';



const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "services", component: ServicesComponent},
  {path: "contact", component: ContactComponent},
  {path: "blog", component: BlogComponent},
  {path: "profile", component: ProfileComponent},
  {path: "cart", component: CartComponent},
  {path: "checkout", component: CheckoutComponent},
  {path: "blogsingle", component: BlogsingleComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [

        RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule, CommonModule]
})
export class AppRoutingModule { }
