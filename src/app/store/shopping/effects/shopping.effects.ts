import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap, tap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { ShoppingActionTypes, ShoppingActions } from '../actions/shopping.actions';



@Injectable()
export class ShoppingEffects {


  @Effect({
    dispatch: false
  })
  loadShoppings$ = this.actions$.pipe(
    ofType(ShoppingActionTypes.LoadShoppings),
    tap((v) =>  console.log(v))
  );


  constructor(private actions$: Actions<ShoppingActions>) {}

}
