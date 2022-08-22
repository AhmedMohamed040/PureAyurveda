import { Component, OnInit } from '@angular/core';
import { Product, Sale } from 'src/app/modules/product';
import { ProductService } from 'src/app/modules/product.service';
import { PRODUCTS } from 'src/app/modules/products-data';

import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fuStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
products: Product[] = [];

cartList: Product[] = this.productService.products;
  constructor(private productService: ProductService) { }


  fStar = faStar;
  fuStar = fuStar;
  counter = Array;

numberReturn(length: number){
  let n =  length;
  return new Array(n);
}


  ngOnInit(): void {
    this.getProducts();
  }

  getProducts():void {
    this.productService.getProducts().subscribe({
      next: products => {

        this.products = products;
      },
      error: err => this.productService.createMessage('error', "Products cant found .")
    });
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
