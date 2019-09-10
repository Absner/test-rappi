import { Pipe, PipeTransform } from '@angular/core';
import { IFilter } from 'src/app/models/filter.model';
import { IProduct } from 'src/app/models/product.models';

@Pipe({
  name: 'multiple'
})
export class MultiplePipe implements PipeTransform {

  transform(products: Array<IProduct>, filtro: IFilter): any {
    if (filtro.disponibility === 3) {
      return products;
    } else {
      return products.filter((product: IProduct) => (product.available === filtro.disponibility) ||
        ((product.quantity >= filtro.stock) && filtro.stock !== null)
        || (parseFloat(product.price) <= filtro.max && parseFloat(product.price) >= filtro.min));
    }
  }

}
