import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService } from './in-memory-data.service';
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { CommonModule, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductModule } from './modules/product/product.module';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './views/about/about.component';
import { BlogComponent } from './views/blog/blog.component';
import { BlogsingleComponent } from './views/blogsingle/blogsingle.component';
import { CheckoutComponent } from './views/checkout/checkout.component';
import { ContactComponent } from './views/contact/contact.component';
import { ProfileComponent } from './views/profile/profile.component';
import { ServicesComponent } from './views/services/services.component';
import { CartComponent } from './views/cart/cart.component';
import { NzMessageModule } from 'ng-zorro-antd/message';

import { CounterComponent } from './components/counter/counter.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    SpinnerComponent,
    NewsComponent,
    AboutComponent,
    ServicesComponent,
    BlogComponent,
    ContactComponent,
    CheckoutComponent,
    ProfileComponent,
    BlogsingleComponent,
    LoginComponent,
    CartComponent,
    CounterComponent,

  ],
  imports: [
    CommonModule,
    NzMessageModule,
    ProductModule,
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    FormsModule,
    NgbModule,

  ],

  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
