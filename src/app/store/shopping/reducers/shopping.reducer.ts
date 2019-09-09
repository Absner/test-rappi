
import { ShoppingActions, ShoppingActionTypes } from '../actions/shopping.actions';

export const shoppingFeatureKey = 'shopping';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: ShoppingActions): State {
  switch (action.type) {

    case ShoppingActionTypes.LoadShoppings:
      return state;

    default:
      return state;
  }
}
