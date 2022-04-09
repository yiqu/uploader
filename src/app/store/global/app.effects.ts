import { Injectable } from "@angular/core";
import { Actions, createEffect } from "@ngrx/effects";
import { filter, map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { appMetaDataEffect } from "../meta/meta.effects";
import { pageTitleEffect } from "../page-title/page-title.effects";
import { AppGlobalRouterEffects } from "../router/router.effects";

@Injectable()
export class AppGlobalEffects {

  constructor(public actions$: Actions) {
  }

}


export const appEffects = [
  AppGlobalEffects,
  AppGlobalRouterEffects,
  ...appMetaDataEffect,
  ...pageTitleEffect
]
