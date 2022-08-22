import { Component, OnInit, ViewEncapsulation, ElementRef  } from '@angular/core';
import { Product } from 'src/app/modules/product';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fuStar } from '@fortawesome/free-solid-svg-icons';

import { PRODUCTS } from 'src/app/modules/products-data';
// import Swiper core and required modules
import { ProductService } from 'src/app/modules/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

showSide = true;
fStar = faStar;
fuStar = fuStar;
rate = 5;
counter = Array;

numberReturn(length: number){
  let n =  length;
  return new Array(n);
}

carts: Product[] = PRODUCTS;

  onSlideChange(): void {
    console.log('slide change');
  }



  ngOnInit(): void {


  }



  constructor(private productService: ProductService) {
}






addToCart(product: Product):any {
  console.log(product.sales, product.limited);
  if(product.sales <= 1)  {

    product.sales = 1
    this.productService.addProduct(product);

  };
  if(product.sales >= product.limited)  {

    product.sales = product.limited;
    this.productService.addProduct(product);


  };
}

}
