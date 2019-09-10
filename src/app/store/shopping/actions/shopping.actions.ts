import { Action } from '@ngrx/store';
import { IProduct, IShoppingCar } from 'src/app/models/product.models';

export enum ShoppingActionTypes {
  LoadShoppings = '[Shopping] Load Shoppings product',
  DeleteShopping = '[Shopping] Delete Shoppings product'
}

export class LoadShoppings implements Action {
  readonly type = ShoppingActionTypes.LoadShoppings;
  constructor(public payload: IShoppingCar) { }
}

export class DeleteShopping implements Action {
  readonly type = ShoppingActionTypes.DeleteShopping;
  constructor(public payload: number) { }
}


export type ShoppingActions =
  | LoadShoppings
  | DeleteShopping;
