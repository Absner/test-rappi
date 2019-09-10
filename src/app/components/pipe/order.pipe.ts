import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from 'src/app/models/product.models';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(products: Array<IProduct>, args: string): any {
    switch (args) {
      case 'price':
        products.sort((a: IProduct, b: IProduct) => {
          if (parseFloat(a.price) < parseFloat(b.price)) {
            return -1;
          } else if (parseFloat(a.price) > parseFloat(b.price)) {
            return 1;
          } else {
            return 0;
          }
        });
        return products;
        break;

      case 'disponibility':
        products.sort((a: IProduct, b: IProduct) => {
          return (Number(b.available) - Number(a.available));
        });
        return products;
        break;

      case 'nodisponibility':
        products.sort((a: IProduct, b: IProduct) => {
          return (a.available === b.available) ? 0 : a.available ? 1 : -1;
        });
        return products;
        break;

      case 'cant':
        products.sort((a: IProduct, b: IProduct) => {
          if (a.quantity < b.quantity) {
            return -1;
          } else if (a.quantity > b.quantity) {
            return 1;
          } else {
            return 0;
          }
        });
        return products;
        break;

      default:
        return products;
        break;
    }
  }

}
