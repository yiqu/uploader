
import { AsyncValidatorFn, FormArray, FormControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export function createFormControl(value: any, disabled: boolean, validators: any[] = [], asyncValids: any[] = []): FormControl {
  let fc = new FormControl({
    value: value ? value : null,
    disabled: disabled
  }, {validators: validators, asyncValidators: asyncValids, initialValueIsDefault: true });
  return fc;
}


export function createFormControl2(value: any, disabled: boolean, validators: ValidatorFn[] = [], asyncValids: AsyncValidatorFn[] = []): FormControl {
  let fc = new FormControl({
    value: value,
    disabled: disabled,
  }, {validators: validators, asyncValidators: asyncValids, initialValueIsDefault: true });
  return fc;
}


/**
 * Calculates all form errors recursively
 * @param form
 * @returns
 */
 export function calculateNestedFormErrors(form: FormGroup | FormArray, removeDuplicate: boolean = true) {
  let errors: AllValidationErrors[] = [];
  Object.keys(form.controls).forEach(field => {
    const control = form.get(field);
    if (control instanceof FormGroup || control instanceof FormArray) {
      errors = errors.concat(calculateNestedFormErrors(control));
      return;
    }

    const controlErrors: ValidationErrors | undefined | null = control?.errors;
    if (controlErrors) {
      Object.keys(controlErrors).forEach(keyError => {
        errors.push({
          controlName: field,
          errorName: keyError,
          errorValue: controlErrors[keyError]
        });
      });
    }
  });
  // This removes duplicates
  if (removeDuplicate) {
    errors = errors.filter((error, index, self) => self.findIndex(t => {
      return t.controlName === error.controlName && t.errorName === error.errorName;
    }) === index);
  }
  return errors;
}

export interface AllValidationErrors {
  controlName: string;
  errorName: string;
  errorValue: any;
};

export interface FormValidationErrorDisplay {
  summary: string;
  errors: AllValidationErrors[];
}
