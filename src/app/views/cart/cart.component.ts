import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/modules/product';


import { ProductService } from 'src/app/modules/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],

})
export class CartComponent implements OnInit {
  basePrice = 0;
  public number: any = 1;
  updated: any;
  @ViewChild('total', { static: false }) totalEl!: ElementRef;


  public products: Product[] = this.productService.products;
  public total: number = 0;


  constructor(private productService: ProductService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    // const id = +this.route.snapshot.paramMap.get('id');
    // this.getProduct(id);
    this.totalPrd();
  }


  getProduct(id: number) {
    this.productService.getProduct(id).subscribe({
      // next: product => this.onProductRetrieved(product),

      // error: err => this.errorMessage = err
    });
  }


  updateVal(event: any): any {

    console.log(event);

  }
  limited(idx: number): number {

    let much = JSON.parse(JSON.stringify(idx));

    return much;



  }

  totalPrd():any {
    console.log(this.products.length);
    if(this.products[1]){
    let price = this.products.map((prd) => prd.price * prd.sales);
    let total = price.reduce((total, prd) => total + prd);
    this.total = total;
    this.productService.total = this.total;

   // let more = this.totalEl.nativeElement.textContent;
    }
    if(this.products.length == 1) {
      let total = this.products[0].price * this.products[0].sales;
      this.total = total;
      this.productService.total = this.total;
      console.log(this.total);

    }
  }

  sumTotal(price: number, much: number): any {



    /*
  let prices = this.products.map((n) => n.price);
  let sum = prices.reduce((total, val) => total + val);
  console.log(sum); */

  }
  limted(product: Product): any {

    if (product.sales <= 1) {

      product.sales = 1

    };
    if (product.sales >= product.limited) {

      product.sales = product.limited;


    };
    //this.totalPrd();


  }
  deleteProduct(product: Product): any {

    this.productService.deleteProduct(product);
    this.totalPrd();
    if(!this.products.length) {
      this.total = 0;
    }
  }
  /* onProductRetrieved(product: Product): void {
    this.product = product;

    if (this.product) {
      this.pageTitle = `Product Detail: ${this.product.productName}`;
    } else {
      this.pageTitle = 'No product found';
    }
  } */
}
