import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function customRequiredValidator(control: FormControl): {[s: string]: boolean} | undefined {
  const val: any = control.value;
  if (val && (""+val).trim() !== "") {
    return undefined;
  }
  return {"fieldRequired": true};
}

export function custom256CountValidator(control: FormControl): {[s: string]: boolean} | undefined {
  const val: any = control.value;
  if (val && (""+val).trim() !== "") {
    const v = (val+"").trim();
    if (v.length <= 256) {
      return undefined;
    }
  }
  return {"fieldTooLong": true};
}

export function customOnlyLettersValidator(control: FormControl): {[s: string]: boolean} | undefined {
  const letters: RegExp = /^[A-Za-z ]+$/;
  if (control.value && control.value.trim().match(letters)) {
    return undefined;
  }
  return {"lettersOnly": true};
}

/**
 * This includes numbers like 0, 1, 0.0, 0.1, 1.0, 99999.000001, 5.10, -0, -1, -0.0, -0.1, -99999.000001, 5.10.
 * @param control
 * @returns
 */
export function numbersOnlyValidator(control: FormControl): {[s: string]: boolean} | undefined {
  const nums: RegExp = /^-?(0|[1-9]\d*)?(\.\d+)?(?<=\d)$/;
  if (control.value && (control.value + '').trim().match(nums)) {
    return undefined;
  }
  return {"numbersOnly": true};
}

/**
 * This includes numbers like 0, 1 and 99999.
 * @param control
 * @returns
 */
export function wholePositiveNumbersOnlyValidator(control: FormControl): {[s: string]: boolean} | undefined {
  const nums: RegExp = /^(0|[1-9]\d*)$/;
  if (control.value && (control.value + '').trim().match(nums)) {
    return undefined;
  }
  return {"numbersOnly": true};
}

/**
 * This includes numbers like 0, 1, 99999, -99999, -1 and -0.
 * @param control
 * @returns
 */
export function wholePositiveAndNegativeNumbersOnlyValidator(control: FormControl): {[s: string]: boolean} | undefined {
  const nums: RegExp = /^-?(0|[1-9]\d*)$/;
  if (control.value && (control.value + '').trim().match(nums)) {
    return undefined;
  }
  return {"numbersOnly": true};
}

/**
 * This includes numbers like 0, 1, 0.0, 0.1, 1.0, 99999.000001, 5.10.
 * @param control
 * @returns
 */
export function fractionPositiveNumbersOnlyValidator(control: FormControl): {[s: string]: boolean} | undefined {
  const nums: RegExp = /^(0|[1-9]\d*)?(\.\d+)?(?<=\d)$/;
  if (control.value && (control.value + '').trim().match(nums)) {
    return undefined;
  }
  return {"numbersOnly": true};
}


export function customOnlyNumbersAndDecimalsValidator(control: FormControl): {[s: string]: boolean} | undefined {
  //const num: RegExp = /^[0-9]+([,.][0-9]+)?$/;
  const num: RegExp = /^[0-9]+([.][0-9]+)?$/;
  // convert to string first
  const val = control.value + "";
  if (control.value && val.match(num)) {
    return undefined;
  }
  return {"decimalAndNumbersOnly": true};
}

export function customNumberWithOptionalCommaAndSingleDecimal(control: FormControl): {[s: string]: boolean} | undefined {
  //const num: RegExp = /^(?:\d{1,3}(?:,\d{3})*|\d+)(?:\.\d+)?$/;
  const num: RegExp = /^(?:\d{1,3}(?:,\d{3})*|\d+)(?:\.\d+)?$/;
  // convert to string first
  const val = control.value + "";
  if (control.value && val.match(num)) {
    return undefined;
  }
  return {"optionalCommaSingleDecimalNumberOnly": true};
}

/**
 * Regex for allowing alphanumeric,-,_ and space
 * @param control
 */
export function alphaNumericValidator(control: FormControl): {[s: string]: boolean} | undefined {
  const alphaNumeric: RegExp = /^[a-z\d\-_\s]+$/i;
  // convert to string first
  const val = (control.value + "").trim();
  if (control.value && val.match(alphaNumeric)) {
    return undefined;
  }
  return {"alphanumericOnly": true};
}

export function noSpaceAllowedValidator(control: FormControl): {[s: string]: boolean} | undefined {
  const val: any = control.value;
  if (val && (!('' + val).includes(' '))) {
    return undefined;
  }
  return { hasSpaceCharacter: true };
}

export function trimmedStringMinCountValidator(count: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const val: any = control.value;
    if (val) {
      const charCount = ('' + val).trim().length;
      if (charCount < count) {
        return { minCharCount: true };
      }
      return null;
    }
    return { minCharCount: true };
  }
}

export function stringMatchInputValidator(toMatch: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const val: any = control.value;
    if (val) {
      if (val !== toMatch) {
        return { inputStringNoMatch: true };
      }
      return null;
    }
    return { inputStringNoMatch: true };
  }
}
