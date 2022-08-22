import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from 'src/app/modules/product';
import { ProductService } from 'src/app/modules/product.service';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';


@Component({
  selector: 'app-filter-product',
  templateUrl: './filter-product.component.html',
  styleUrls: ['./filter-product.component.scss']
})
export class FilterProductComponent implements OnInit {

  //  _listFilter = '';
   searchTerms = new Subject<string>();

  products$!: Observable<Product[]>;
  filteredProducts: Product[] = [];


  constructor(private productService: ProductService) { }

  ngOnInit(): void {

  /*   this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.performFilter(this.listFilter);
      },
      error: (err: any) => console.log(err)

    }); */
    this.products$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(400),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.productService.searchProduct(term)),
    );


  }
/*
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }


  performFilter(filterBy: string): Product[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: Product) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  search(): any {
    return this.productService.getProducts().subscribe({

      next: products => {
        this.products = products;
        this.filteredProducts = this.performFilter(this.listFilter);
      },
      error: (err: any) => console.log(err)

    });
  } */

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

}
