import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import * as fromShopping from '../../store/index';
import { IShoppingCar } from 'src/app/models/product.models';
import { DeleteShopping, RestoreShopping } from 'src/app/store/shopping/actions/shopping.actions';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-page-shopping',
  templateUrl: './page-shopping.component.html',
  styleUrls: ['./page-shopping.component.scss']
})
export class PageShoppingComponent implements OnInit, OnDestroy {

  private getShopping: Subscription;
  private getShopping$ = this.store.select(fromShopping.getShoppingCar);

  public shopping: Array<IShoppingCar> = [];
  public total: number = 0;


  constructor(
    private store: Store<fromShopping.State>
  ) { }

  ngOnInit() {
    this.getShopping = this.getShopping$.subscribe((car: Array<IShoppingCar>) => {
      if (car !== null) {
        const nuevoCar: Array<IShoppingCar> = car;
        this.shopping = [];
        nuevoCar.forEach((item: IShoppingCar) => {
          this.shopping.push({
            products: item.products,
            cant: item.cant
          });
        });
      }
      this.totalAmmount();
    });

    // this.totalAmmount();
  }

  /**
   * price
   */
  public price(count: any, item: number, index: number) {
    this.shopping[index].cant = count;
    this.totalAmmount();
  }

  /**
   * del
   */
  public del(index: number) {
    // this.shopping.splice(index, 1);
    this.totalAmmount();
    this.store.dispatch(new DeleteShopping(index));
  }

  /**
   * successPayment
   */
  public successPayment() {
    Swal.fire({
      type: 'success',
      title: 'Operación éxitosa',
      text: 'Gracias por comprar con nosotros'
    }).then((result)  =>  {
      if (result.value) {
        this.store.dispatch(new RestoreShopping());
      }
    });
  }



  private totalAmmount() {
    this.total = 0;
    this.shopping.forEach((item: IShoppingCar) => {
      const cost: number = item.cant * parseFloat(item.products.price);
      this.total = this.total + cost;
    });
  }

  ngOnDestroy() {
    this.getShopping.unsubscribe();
  }

}
