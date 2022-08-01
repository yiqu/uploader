import { Injectable } from '@angular/core';
import { OnInitEffects } from "@ngrx/effects";
import { Actions, ofType, createEffect, concatLatestFrom } from '@ngrx/effects';
import { map, switchMap, iif, of, mergeMap, EMPTY, distinctUntilChanged, catchError } from 'rxjs';
import { AuthService } from 'src/app/authentication/auth.service';


@Injectable()
export class SideNavEffects {

  constructor(public actions$: Actions) {
  }

}


export const sideNavEffect = [
  SideNavEffects
]
