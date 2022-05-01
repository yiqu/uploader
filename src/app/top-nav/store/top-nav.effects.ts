import { Injectable } from "@angular/core";
import { catchError, filter, map, switchMap, tap } from "rxjs/operators";
import { Actions, ofType, createEffect, concatLatestFrom, OnInitEffects } from '@ngrx/effects';

@Injectable()
export class TopNavEffects {

  constructor(public actions$: Actions) {
  }

}

