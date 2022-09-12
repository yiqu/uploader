import { Pipe, PipeTransform } from '@angular/core';
import memo from 'memo-decorator';
import { humanFileSize } from '../general.utils';
import { DateDisplayPipe } from './time-utils.pipe';

@Pipe({
  name: 'tableColumnDisplay',
  pure: true
})
export class TableColumnDisplayPipe implements PipeTransform {

  @memo()
  transform(value: string): any {
    let res: string = value;

    switch(value) {
      case "photoUrl": {
        res = "File URL";
        break;
      }
      case "fileName": {
        res = "File Name";
        break;
      }
      case "fileSize": {
        res = "Size";
        break;
      }
      case "dateUploaded": {
        res = "Date Uploaded";
        break;
      }
    }
    return res;
  }

}

@Pipe({
  name: 'tableDataDisplay',
  pure: true
})
export class TableDataDisplayPipe implements PipeTransform {

  constructor(private dp: DateDisplayPipe) {
  }

  transform(value: any, colId: string): any {
    let res: string = value;

    switch(colId) {
      case "photoUrl": {
        res = "" + value;
        res = res.slice(0, 25) + "..." + res.slice(-15);
        break;
      }
      case "dateUploaded": {
        res = this.dp.transform(value, 'MDYANDFROMNOW');
        break;
      }
      case "fileSize": {
        res = humanFileSize(value, true, 0);
        break;
      }
    }
    return res;
  }

}


