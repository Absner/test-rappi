
import { ShoppingActions, ShoppingActionTypes } from '../actions/shopping.actions';
import { IShoppingCar } from 'src/app/models/product.models';

export const shoppingFeatureKey = 'shopping';

export interface State {
  shoppingCar: Array<IShoppingCar>;
}

export const initialState: State = {
  shoppingCar: []
};

export function reducer(state = initialState, action: ShoppingActions): State {
  switch (action.type) {

    case ShoppingActionTypes.LoadShoppings:
      return { ...state, shoppingCar: [action.payload, ...state.shoppingCar] };

    case ShoppingActionTypes.DeleteShopping:

      return { ...state, shoppingCar: [...state.shoppingCar.slice(0, action.payload), ...state.shoppingCar.slice(action.payload + 1)] };

    default:
      return state;
  }
}

export const selectShoppingCar = (state: State) => state.shoppingCar;
