import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { environment } from '../../environments/environment';
import * as fromShopping from './shopping/reducers/shopping.reducer';

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({
    keys: ['shoppingCar'],
    rehydrate: true
  })(reducer);
}


export interface State {
  shoppingCar: fromShopping.State;
}

export const reducers: ActionReducerMap<State> = {
  shoppingCar: fromShopping.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [localStorageSyncReducer] : [localStorageSyncReducer];

/**
 * Selector
 */
export const selectShopping = createFeatureSelector<fromShopping.State>('shoppingCar');
export const getShoppingCar = createSelector(selectShopping, fromShopping.selectShoppingCar);
