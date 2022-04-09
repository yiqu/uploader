import { Pipe, PipeTransform } from '@angular/core';
import memo from 'memo-decorator';

@Pipe({
  name: 'silingEntryTooltip',
  pure: true
})
export class SilingEntryTooltipDisplay implements PipeTransform {

  transform(value: string, compact?: boolean, editing?: boolean): any {
    let res: string = value;

    switch(value) {
      case "amount": {
        res = compact ? 'Dollar amount' : "The dollar amount of this date.";
        break;
      }
      case "company": {
        res = compact ? 'Institution name' : "The bank institution name.";
        break;
      }
      case "date": {
        res = compact ? 'Date' : "The entry date. Defaults to today.";
        break;
      }
      case "updateDate": {
        res = editing ? 'Update recorded date?' : (compact ? 'Use a different date than now.' : "Use a different date than now.");
        break;
      }
    }
    return res;
  }

}


@Pipe({
  name: 'silingCompanyDisplay',
  pure: true
})
export class SilingCompanyDisplay implements PipeTransform {

  @memo()
  transform(value: string): any {
    let res: string = value;

    switch(value) {
      case "ascensus": {
        res = "Ascensus";
        break;
      }
      case "fidelity": {
        res = "Fidelity";
        break;
      }
      case "empower": {
        res = "Empower";
        break;
      }
      case "csg": {
        res = "Capital Solutions Group";
        break;
      }
    }
    return res;
  }

}
