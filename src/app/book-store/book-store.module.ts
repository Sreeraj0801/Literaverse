import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { SingleCardComponent } from './components/single-card/single-card.component';
import { ButtonComponent } from './components/button/button.component';
import { CartCardComponent } from './components/cart-card/cart-card.component';
import { CartButtonComponent } from './components/cart-button/cart-button.component';
import { ShimmerUIComponent } from './components/shimmer-ui/shimmer-ui.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  declarations: [
    HomeComponent,
    CartComponent,
    SingleCardComponent,
    ButtonComponent,
    CartCardComponent,
    CartButtonComponent,
    ShimmerUIComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class BookStoreModule { }
