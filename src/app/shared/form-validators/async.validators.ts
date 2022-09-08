import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { Observable, of, switchMap, take, map, catchError, timer, tap, distinctUntilChanged, filter, iif } from "rxjs";
import { PackageJson } from "src/app/store/meta/meta.state";
import { HttpService } from "../services/http.service";

export const VERSION_ERROR_EXISTS: ValidationErrors = { versionAlreadyExist: true };
export const VERSION_ERROR_MISSING: ValidationErrors = { versionMissing: true };
export const VERSION_ERROR_API: ValidationErrors = { versionApiError: true };

export function githubVersionValidator(httpService: HttpService, apiUrl: string): AsyncValidatorFn {
  let previousControlValue: string | undefined;
  let previousControlError: boolean = false;

  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    if (!control.value || !control.valueChanges || (control.value as string).trim() === '') {
      return of(VERSION_ERROR_MISSING).pipe(take(1));
    }

    if (control.value === previousControlValue) {
      return iif(
        () => previousControlError,
        of(VERSION_ERROR_EXISTS).pipe(take(1)),
        of(null).pipe(take(1))
      );
    }

    // acts as debounce timer for 1 second
    return timer(1000).pipe(
      take(1),
      filter(() => {
        return control.value !== previousControlValue;
      }),
      tap(() => {
        previousControlValue = control.value;
      }),
      switchMap((val) => {
        return httpService.get<PackageJson>(apiUrl).pipe(
          catchError((err) => {
            previousControlError = false;
            return of(null).pipe(take(1));
          }),
          map((version: PackageJson | null) => {
            if (version) {
              if (version.version === control.value) {
                previousControlError = true;
                return VERSION_ERROR_EXISTS;
              } else {
                previousControlError = false;
                return null;
              }
            }
            return VERSION_ERROR_API;
          })
        );
      })
    );
  };
}
