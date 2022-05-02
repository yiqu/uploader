import { Injectable } from "@angular/core";
import { Actions, createEffect } from "@ngrx/effects";
import { filter, map } from "rxjs/operators";
import { AuthEffects } from "src/app/authentication/store/auth.effects";
import { TopNavEffects } from "src/app/top-nav/store/top-nav.effects";
import { environment } from "src/environments/environment";
import { appMetaDataEffect } from "../meta/meta.effects";
import { pageTitleEffect } from "../page-title/page-title.effects";
import { RouterRelatedEffects } from "../router-related/router-related.effects";
import { AppGlobalRouterEffects } from "../router/router.effects";

@Injectable()
export class AppGlobalEffects {

  constructor(public actions$: Actions) {
  }

}


export const appEffects = [
  AppGlobalEffects,
  AppGlobalRouterEffects,
  AuthEffects,
  TopNavEffects,
  RouterRelatedEffects,
  ...appMetaDataEffect,
  ...pageTitleEffect
]
