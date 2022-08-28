import { Component, OnInit, ViewChild, ViewEncapsulation, Input } from '@angular/core';

import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fuStar } from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/modules/product';
import { ProductService } from 'src/app/modules/product.service';
import { PRODUCTS } from 'src/app/modules/products-data';

// SwiperCore.use([Swiper, Navigation, Pagination, Autoplay]);

import { SwiperComponent } from "swiper/angular";
// import Swiper core and required modules

import SwiperCore, { Autoplay, Pagination, Navigation, Swiper } from "swiper";

SwiperCore.use([Autoplay, Pagination, Navigation]);

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class TrendingComponent implements OnInit {
  fStar = faStar;
  fuStar = fuStar;
  rate = 5;
  counter = Array;

  carts: Product[] = PRODUCTS;
  @Input() sideTrending:any = false;

  @ViewChild('swiper', { static: false }) swiper!: SwiperComponent;
  @ViewChild('subSwiper', { static: false }) subSwiper!: SwiperComponent;




  numberReturn(length: number) {
    let n = length;
    return new Array(n);
  }
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  addToCart(product: Product): any {
    console.log(product.sales, product.limited);
    if (product.sales <= 1) {

      product.sales = 1
      this.productService.addProduct(product);

    };
    if (product.sales >= product.limited) {

      product.sales = product.limited;
      this.productService.addProduct(product);


    };
  }

  points: any = { 575: { slidesPerView: 1, spaceBetween: 0 }, 767: { slidesPerView: 2, spaceBetween: 0 }, 992: { slidesPerView: 3, spaceBetween: 0 }, 1400: { slidesPerView: 4, spaceBetween: 0 } };
}
