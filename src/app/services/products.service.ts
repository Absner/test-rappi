import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { IProduct } from '../models/product.models';

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
}
