import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromShopping from '../../store/index';
import { IShoppingCar } from 'src/app/models/product.models';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  public car: Array<IShoppingCar> = [];

  private getShopping: Subscription;
  private getShopping$ = this.store.select(fromShopping.getShoppingCar);


  @Input() toggleSideNav: any;
  constructor(
    private store: Store<fromShopping.State>
  ) { }

  ngOnInit() {
    this.getShopping = this.getShopping$.subscribe((products: Array<IShoppingCar>) => {
      if (products !== null) {
        this.car = products;
      }
    });
  }

  ngOnDestroy() {
    this.getShopping.unsubscribe();
  }

}
