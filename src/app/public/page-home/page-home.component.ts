import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { IProduct } from 'src/app/models/product.models';
import { IFilter } from 'src/app/models/filter.model';


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
  private newFilter: IFilter;

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.getProductos();
  }

  /**
   * addCard
   */
  public addCard(product: IProduct) {
    console.log(product);
  }

  /**
   * getFilter
   */
  public getFilter(data: any) {
    console.log('filter', data);
    if (data.type === 'filter') {
      this.newFilter = data.content;
      this.filterProducts();
    }
  }

  private filterProducts() {
    const newArray: Array<any>  = this.allProducts.filter((item: IProduct) => {
      console.log('hola', this.newFilter.disponibility);
      return item.available === this.newFilter.disponibility;
    });
    console.log('array final', newArray);

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

}
