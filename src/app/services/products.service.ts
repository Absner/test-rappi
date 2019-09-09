import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { map, filter, exhaustMap, tap, flatMap } from 'rxjs/operators'
import { IProduct } from '../models/product.models';
import { pipeFromArray } from 'rxjs/internal/util/pipe';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * getProducts
   */
  public getProducts(): Observable<IProduct[]> {
    return this.http.get('./assets/source/products.json').pipe(
      map((value: any) => value.products)
    );
  }

  /**
   * getCategoryProduct
   */
  public getCategoryProducts(id: number): Observable<IProduct[]> {
    return this.http.get('./assets/source/products.json').pipe(
      map((value: any) => {
        const final: Array<IProduct>  = value.products;
        return final.filter((product: IProduct) => product.sublevel_id === id);
      }),

    );
  }
}
