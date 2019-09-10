import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductsService } from 'src/app/services/products.service';
import { IProduct, IShoppingCar } from 'src/app/models/product.models';
import { IFilter } from 'src/app/models/filter.model';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoadShoppings } from 'src/app/store/shopping/actions/shopping.actions';
import * as fromShopping from '../../store/index';


@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss'],
  providers: [
    ProductsService
  ]
})
export class PageHomeComponent implements OnInit {

  public allProducts: Array<IProduct> = [];
  public maxPrice: number = 0;
  public order: string = '';
  public newFilter: IFilter;
  private shoppingCar: Array<IShoppingCar> = [];

  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private store: Store<fromShopping.State>,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params: any) => {
      if (params.id !== undefined) {
        this.getProductoVategory(parseInt(params.id, 10));
      } else {
        this.getProductos();
      }
    });

    this.newFilter = {
      disponibility: 3
    };
  }

  /**
   * addCard
   */
  public addCard(product: IProduct) {

    this.shoppingCar.push({
      products: product,
      cant: 1
    });
    this.store.dispatch(new LoadShoppings({
      products: product,
      cant: 1
    }));
    this.openSnackBar();

  }

  /**
   * getFilter
   */
  public getFilter(data: any) {
    console.log('filter', data);
    if (data.type === 'filter') {
      this.newFilter = data.content;
    }

    if (data.type === 'order') {
      this.newFilter = data.content;
      this.order = this.newFilter.order;
    }
  }

  public openSnackBar() {
    this.snackBar.open('Producto agregado', '', {
      duration: 2000,
    });
  }



  private getProductos() {
    this.productsService.getProducts().subscribe((response: Array<IProduct>) => {

      this.allProducts = response;

      this.allProducts.forEach((item: IProduct) => {
        item.price = parseFloat(item.price) as any;
      });
      this.maxPrice = Math.max.apply(Math, this.allProducts.map((item: IProduct) => {
        return item.price;
      }));

    });
  }

  private getProductoVategory(id: number) {
    this.productsService.getCategoryProducts(id).subscribe((response) => {
      this.allProducts = response;
    });
  }

}
