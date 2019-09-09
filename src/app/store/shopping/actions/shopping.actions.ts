import { Action } from '@ngrx/store';

export enum ShoppingActionTypes {
  LoadShoppings = '[Shopping] Load Shoppings',
  
  
}

export class LoadShoppings implements Action {
  readonly type = ShoppingActionTypes.LoadShoppings;
}


export type ShoppingActions = LoadShoppings;
