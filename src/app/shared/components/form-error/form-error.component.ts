import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ValidationErrors } from '@angular/forms';


@Component({
  selector: 'shared-form-error-display',
  templateUrl: 'form-error.component.html',
  styleUrls: ['./form-error.component.scss']
})
export class FormErrorDisplayComponent implements OnInit, OnChanges {

  @Input()
  formControlError?: ValidationErrors | undefined | null;

  displayKey?: string;
  errorDetail: any;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.formControlError) {
      const errorKeys: string[] = Object.keys(this.formControlError);
      this.displayKey = errorKeys[0];
      this.errorDetail = this.formControlError[this.displayKey];
    } else {
      this.displayKey = undefined;
    }
  }

  ngOnInit() {
  }
}
