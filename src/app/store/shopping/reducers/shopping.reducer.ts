
import { ShoppingActions, ShoppingActionTypes } from '../actions/shopping.actions';
import { IShoppingCar } from 'src/app/models/product.models';

export const shoppingFeatureKey = 'shopping';

export interface State {
  shoppingCar: Array<IShoppingCar>;
}

export const initialState: State = {
  shoppingCar: null
};

export function reducer(state = initialState, action: ShoppingActions): State {
  switch (action.type) {

    case ShoppingActionTypes.LoadShoppings:
      return { ...state, shoppingCar: action.payload};

    default:
      return state;
  }
}

export const selectShoppingCar  = (state: State)  =>  state.shoppingCar;
