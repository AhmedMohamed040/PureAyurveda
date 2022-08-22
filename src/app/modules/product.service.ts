import { Injectable } from '@angular/core';
import { Product, Sale } from './product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PRODUCTS } from './products-data';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd/message';
import { User } from './users';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  showProfile = false;
  total = 0;
  user = new User();
  constructor( private message: NzMessageService, private http: HttpClient) { }

  public products:Product[] = [];
  public productsUrl = 'api/products';



  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data[1]))),
        catchError(this.handleError<Product[]>('getProdcuts', []))

      );
  }


  getProduct(id: number): Observable<Product> {
  //  let product = PRODUCTS.find( p => p.id === id)!;
    //return of(product);

    const url = `${this.productsUrl}/${id}`;
    return this.http.get<Product>(url)
      .pipe(
        tap(data => console.log('getProduct: ' + JSON.stringify(data))),
        catchError(this.handleError<Product>(`getProdcut id=${id}`))

      );
  }


/*
  getProducts(): Observable<Product[]> {
    const products = of(PRODUCTS);
    return products;
  } */


  addProduct(product: Product): any {
    this.createMessage('success', 'The product added to cart .');
  //  this.sales.push({id: product.id, sales: product.limited, much: product.sales});
 //   console.log(this.sales);

    let prd = this.products.push(product);
    return of(prd);

  }

  deleteProduct(product: Product): any {
  let del =  this.products.splice(this.products.indexOf(product), 1);
    this.createMessage('error', 'The product deleted .');
    return of(del);
  }



  createMessage(type: string, msg:string): void {
    this.message.create(type, `${msg}`,{


    });
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /* GET heroes whose name contains search term */
  searchProduct(term: string): Observable<Product[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Product[]>(`${this.productsUrl}/?productName=${term}`).pipe(
      tap(x => x.length ?
         this.createMessage('succes', `found products matching "${term}"`) :
         this.createMessage('error', `no product matched "${term}"`),
      catchError(this.handleError<Product[]>('searchProducts', []))
    ));
  }

}
