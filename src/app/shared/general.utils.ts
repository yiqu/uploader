import { FormArray, FormControl, FormGroup, ValidationErrors } from '@angular/forms';

export function createFormControl(value: any, disabled: boolean, validators: any[] = [], asyncValids: any[] = []): FormControl {
  let fc = new FormControl({
    value: value ? value : null,
    disabled: disabled
  }, validators, asyncValids);
  return fc;
}

export function createFormControl2(value: any, disabled: boolean, validators: any[] = [], asyncValids: any[] = []): FormControl {
  let fc = new FormControl({
    value: value,
    disabled: disabled
  }, validators, asyncValids);
  return fc;
}


export function scrollToElementById(id: string): void {
  let top = document.getElementById(id);
  if (top) {
    setTimeout(() => {
      top?.scrollIntoView({block: "end"});
      top = null;
    }, 10)
  }
}

export function convertCommaDecimalNumberToNumber(num: string): number {
  if (num) {
    const stripped = num.trim();
    return parseFloat(stripped.replace(/,/g, ''));
  }
  return NaN;
}

export function insertIntoArrayAtIndex<T>(arr: T[], index: number, item: T): T[] {
  const arrCopy: T[] = JSON.parse(JSON.stringify(arr));
  arrCopy.splice(index, 0, item);
  return arrCopy;
}

export function isNumeric(val: any): boolean {
  if (typeof val === 'number') {
    return true;
  }
  return !isNaN(+val) && !isNaN(parseFloat(val + ''));
}

export function capitalizeFirstLetter(str: string): string | undefined {
  if (str) {
    return (str.charAt(0).toUpperCase()) + str.slice(1);
  }
  return undefined;
}

export function getLocaleNumber(num: any): string {
  return (+num).toLocaleString(undefined);
}

export function objectsEqual(o1: any, o2: any): boolean {
  return typeof o1 === 'object' && Object.keys(o1).length > 0
  ? Object.keys(o1).length === Object.keys(o2).length
      && Object.keys(o1).every(p => objectsEqual(o1[p], o2[p]))
  : o1 === o2;
}

export function arraysEqual(a1: any[], a2: any[]): boolean {
  if (a1 && a2) {
    return a1.length === a2.length && a1.every((o, idx) => objectsEqual(o, a2[idx]));
  }
  return false;
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

export function removeEmptyFromObject(obj: any): any {
  if (!obj) {
    return {};
  }
  const result = JSON.parse(JSON.stringify(obj));
  Object.keys(result).forEach((key) => {
    if (result[key] === null || result[key] === undefined) {
      delete result[key];
    }
  });
  return result;
}

export function isObjectEmpty(obj: any): boolean {
  if (obj) {
    const keys = Object.keys(obj);
    return keys.length < 1;
  }
  return false;
}

// Remove objects in an array if the object has the same value by key provided
export function deduplicateObjectArrayByKey<T>(arr: T[], key: string): T[] {
  if (arr && arr.length > 0) {
    const uniqueByValues: any[] = arr.map((res: T) => res[key as keyof T]);
    const filtered = arr.filter((res: T, index: number) => {
      return !uniqueByValues.includes(res[key as keyof T], index + 1);
    });
    return filtered;
  }
  return [];
}


