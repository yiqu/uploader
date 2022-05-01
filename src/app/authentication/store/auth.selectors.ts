import {createFeatureSelector, createSelector} from '@ngrx/store';
import { IVerifiedUser } from 'src/app/shared/models/user.model';
import { AuthState } from './auth.models';
import { USER_AUTH_STATE } from './auth.state';

export const userAuthFeatureState = createFeatureSelector<AuthState>(USER_AUTH_STATE);

export const apiErrorMessage = createSelector(
  userAuthFeatureState,
  (state): string | undefined => {
    return state.errorMsg;
  }
);

export const apiError = createSelector(
  userAuthFeatureState,
  (state): boolean | undefined => {
    return state.error;
  }
);

export const apiLoading = createSelector(
  userAuthFeatureState,
  (state): boolean | undefined => {
    return state.loading;
  }
);

export const getUser = createSelector(
  userAuthFeatureState,
  (state): IVerifiedUser | null | undefined => {
    return state.verifiedUser;
  }
);
