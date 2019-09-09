import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { ShoppingActionTypes, ShoppingActions } from '../actions/shopping.actions';



@Injectable()
export class ShoppingEffects {


  @Effect()
  loadShoppings$ = this.actions$.pipe(
    ofType(ShoppingActionTypes.LoadShoppings),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  );


  constructor(private actions$: Actions<ShoppingActions>) {}

}
