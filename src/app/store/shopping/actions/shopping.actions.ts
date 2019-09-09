import { Action } from '@ngrx/store';
import { IProduct, IShoppingCar } from 'src/app/models/product.models';

export enum ShoppingActionTypes {
  LoadShoppings = '[Shopping] Load Shoppings product',
}

export class LoadShoppings implements Action {
  readonly type = ShoppingActionTypes.LoadShoppings;
  constructor(public payload: Array<IShoppingCar>) { }
}


export type ShoppingActions = LoadShoppings;
