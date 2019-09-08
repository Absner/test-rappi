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

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.getProductos();
  }

  private getProductos() {
    this.productsService.getProducts().subscribe((response) =>  {
      console.log('productos', response);
      this.allProducts  = response;
    });
  }

}
