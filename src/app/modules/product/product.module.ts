import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShopComponent } from 'src/app/views/shop/shop.component';
import { ProductComponent } from 'src/app/views/product/product.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { TrendingComponent } from 'src/app/components/trending/trending.component';
import { FilterProductComponent } from 'src/app/components/filter-product/filter-product.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SwiperModule } from 'swiper/angular';
import { HttpClientInMemoryWebApiModule  } from 'angular-in-memory-web-api';
import { InMemoryDataService } from "src/app/modules/in-memory-db.service";
import { HttpClientModule } from '@angular/common/http';

@NgModule({

  imports: [
    CommonModule,
    FontAwesomeModule,
    SwiperModule,
    FormsModule,
    HttpClientModule,

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    RouterModule.forChild([
      {path: 'products', component: ShopComponent},
      {path: 'products/:id', component: ProductComponent}

    ]),
  ],
  declarations: [
    FilterProductComponent,
    ShopComponent,
    ProductComponent,
    FooterComponent,
    TrendingComponent

  ],
  exports: [
    ShopComponent,
    FilterProductComponent,
    ProductComponent,
    FooterComponent,
    TrendingComponent,
  ]
})
export class ProductModule { }
