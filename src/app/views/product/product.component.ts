import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/modules/product';
import { ProductService } from 'src/app/modules/product.service';


import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fuStar } from '@fortawesome/free-solid-svg-icons';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  cart: Product | undefined;
  showSide = false;
  fStar = faStar;
  fuStar = fuStar;
  counter = Array;
   sub!: Subscription;


numberReturn(length: number){
  let n =  length;
  return new Array(n);
}

  constructor(private productService: ProductService, private route: ActivatedRoute) { }
  ngOnInit(): void {

     this.route.paramMap.subscribe (
      params => {
       const id = +params.get('id')!;
       this.getProduct(id);
     }
   )
   /*
    //. Read the product Id from the route parameter
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getProduct(id);
    } */

  }

  getProduct (id: number): any {
    this.productService.getProduct(id)
      .subscribe({
        next: (product: Product) => this.cart = product,
        error: (err: any) => this.productService.createMessage('error', `${err}`)
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
