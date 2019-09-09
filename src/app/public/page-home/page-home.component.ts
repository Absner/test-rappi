import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { IProduct } from 'src/app/models/product.models';
import { IFilter } from 'src/app/models/filter.model';
import { ActivatedRoute } from '@angular/router';


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
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute
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
      disponibility: true
    };
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
    }
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
    this.productsService.getCategoryProducts(id).subscribe((response) =>  {
      this.allProducts  = response;
    });
  }

}
