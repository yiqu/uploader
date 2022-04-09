import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import * as fromUtils from '../general.utils';


@Pipe({name: 'dateDisplay', pure: true})
export class DateDisplayPipe implements PipeTransform {

  transform(value: any, displayType: string): any {
    if (value || (value === 0)) {
      const dateMilli = +value;
      switch (displayType) {
        case "FROMNOW": {
          return moment(dateMilli).fromNow();
        }
        case "HMS": {
          return moment(dateMilli).format("h:mm:ss a");
        }
        case "MDY": {
          return moment(dateMilli).format("MM/DD/YYYY");
        }
        case "FULLDATE": {
          return moment(dateMilli).format("MM/DD/YY, h:mm a");
        }
        case "INPUTDATE": {
          return moment(dateMilli).format("MM/DD/YY, HH:mm");
        }
        case "FULLANDFROMNOW": {
          return moment(dateMilli).format("MM/DD/YY, h:mm a") + " (" + moment(dateMilli).fromNow() + ")";
        }
        case "MDYANDFROMNOW": {
          return moment(dateMilli).format("MM/DD/YYYY") + " (" + moment(dateMilli).fromNow() + ")";
        }
        default: {
          return value;
        }
      }
    }
    return "Invalid date / No date";

  }
}

@Pipe({
  name: 'dateFromNow',
  pure: true
})
export class TimeFromNowPipe implements PipeTransform {

  transform(value: number | string): string {

    let timeFromNow = "";
    let dateInEpoc: number = NaN;

    if (fromUtils.isNumeric(value)) {
      dateInEpoc = +value;
      timeFromNow = moment(+value).fromNow();
    } else {
      dateInEpoc = new Date(value+'').getTime();
      timeFromNow = moment(new Date(value+'').getTime()).fromNow();
    }

    const currentTime = new Date().getTime();

    if (fromUtils.isNumeric(dateInEpoc)) {
      if ((currentTime - dateInEpoc) < 2000) {
      return 'Just now';
      }
      return timeFromNow;
    }
    return 'Invalid date';
  }
}
