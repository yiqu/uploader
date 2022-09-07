import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { Observable, of, switchMap, take, map, catchError, timer, tap, distinctUntilChanged, filter, iif } from "rxjs";
import { PackageJson } from "src/app/store/meta/meta.state";
import { HttpService } from "../services/http.service";

export function githubVersionValidator(httpService: HttpService, apiUrl: string): AsyncValidatorFn {
  let previousControlValue: string | undefined;
  let previousControlError: boolean = false;

  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    if (!control.value || !control.valueChanges) {
      return of(null).pipe(
        take(1)
      );
    }
    if (control.value === previousControlValue) {
      return iif(
        () => previousControlError,
        of({ versionAlreadyExist: true }),
        of(null).pipe(
          take(1)
        )
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
            return of(null);
          }),
          map((version: PackageJson | null) => {
            console.log(version?.version, control.value)
            if (version) {
              if (version.version === control.value) {
                previousControlError = true;
                return {
                  versionAlreadyExist: true
                };
              } else {
                previousControlError = false;
                return null;
              }
            }
            return { httpError: true };
          })
        );
      })
    );
  };
}
