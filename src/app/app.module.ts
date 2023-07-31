import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { BookServiceService } from './services/book-service.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './book-store/components/navbar/navbar.component';
import { NavButtonComponent } from './book-store/components/nav-button/nav-button.component';

@NgModule({
  declarations: [AppComponent,NavbarComponent,NavButtonComponent],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule],
  providers: [BookServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
