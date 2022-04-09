import { Pipe, PipeTransform } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import memo from 'memo-decorator';
import { AllValidationErrors, FormValidationErrorDisplay } from '../general.utils';


@Pipe({
  name: 'formErrorDisplay',
  pure: true
})
export class FormErrorDisplayPipe implements PipeTransform {

  @memo()
  transform(errors: AllValidationErrors[]): FormValidationErrorDisplay | undefined {
    const count = errors.length;
    if (count) {
      return {
        summary: count + (count === 1 ? ' error' : ' errors'),
        errors: errors
      }
    }
    return undefined;
  }
}
