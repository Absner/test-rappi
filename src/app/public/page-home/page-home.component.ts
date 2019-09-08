import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { IProduct } from 'src/app/models/product.models';


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
