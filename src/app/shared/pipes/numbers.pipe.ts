import { Pipe, PipeTransform } from "@angular/core";
import memo from 'memo-decorator';

@Pipe({
  name: 'roundNumberDisplay',
  pure: true
})
export class RoundNumberPipe implements PipeTransform {

  transform(value: any, decimal: number): string {
    let valInNum = +value;
    return valInNum.toFixed(decimal);
  }
}

@Pipe({
  name: 'localeNumberDisplay',
  pure: true
})
export class LocaleNumberPipe implements PipeTransform {

  @memo()
  transform(value: number): string {
    return (+value).toLocaleString(undefined, {minimumFractionDigits: 2});
  }
}

@Pipe({
  name: 'profitPercent',
  pure: true
})
export class ProfitPercentPipe implements PipeTransform {

  constructor(private rnp: RoundNumberPipe) {
  }

  @memo()
  transform(value: number): string {
    let result;
    let percent: number = (value * 100);
    if (isNaN(percent)) {
      return "N/A";
    } else {
      result = this.rnp.transform(Math.abs(percent), 1) + "%";
    }
    return result;
  }
}

@Pipe({
  name: 'profitPercentIconClass',
  pure: true
})
export class ProfitPercentIconClassPipe implements PipeTransform {

  constructor(private rnp: RoundNumberPipe) {
  }

  transform(value: number): string | null {
    let result;
    let percent: number = (value * 100);
    if (isNaN(percent) || percent === 0) {
      return null;
    } else if (percent < 0) {
      result = 'arrow_downward';
    } else {
      result = 'arrow_upward';
    }
    return result;
  }
}

@Pipe({
  name: 'profit',
  pure: true
})
export class ProfitPipe implements PipeTransform {

  constructor(private lp: LocaleNumberPipe) {
  }

  @memo()
  transform(value: number): string {
    let result;
    if (isNaN(value)) {
      return "N/A";
    }
    else if (value === 0) {
      result = "No Change"
    }
    else if (value > 0) {
      result = "+ $" + this.lp.transform(value);
    }
    else {
      result = "- $" + this.lp.transform(Math.abs(value));
    }
    return result;
  }
}


@Pipe({
  name: 'numberGainClass',
  pure: true
})
export class ProfitGainClassPipe implements PipeTransform {

  @memo()
  transform(value: any): string {
    const num = +value;
    if (num === 0) {
      return 'no-change';
    }
    if (num > 0) {
      return 'positive';
    }
    return 'negative';
  }
}

@Pipe({
  name: 'profitGainBgClass',
  pure: true
})
export class ProfileGainBgColorPipe implements PipeTransform {

  @memo()
  transform(value: any): string {
    const num = +value * 100;
    if (num === 0) {
      return 'no-change-bg';
    } else if (num < 0 && num > -3) {
      return 'neg-bg-1';
    } else if (num <= -3 && num > -5) {
      return 'neg-bg-2';
    } else if (num <= -5) {
      return 'neg-bg-3';
    } else if (num > 0) {
      return 'pos-bg';
    } else {
      return '';
    }
  }
}

