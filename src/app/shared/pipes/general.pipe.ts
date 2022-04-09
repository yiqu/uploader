import { Location } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import memo from 'memo-decorator';

@Pipe({
  name: 'createdToCssClass',
  pure: true
})
export class CreatedStatusToCssClassPipe implements PipeTransform {

  @memo()
  transform(value: boolean | undefined): any {
    return value ? "" : "loading-bg";
  }
}


@Pipe({
  name: 'getValueCountDisplay',
  pure: true
})
export class ValueCountPipe implements PipeTransform {

  transform(value: string): number {
    if (value) {
      let v = value+"";
      return v.trim().length;
    }
    return 0;
  }
}

@Pipe({
  name: 'urlFromArray',
  pure: true
})
export class UrlFromArray implements PipeTransform {

  transform(value: any[]|undefined[]): string[] {
    let url: string[] = [];
    value.forEach((arr) => {
      url = [...url, ...arr]
    });
    return url;
  }
}

@Pipe({
  name: 'menuOpenStatus',
  pure: true
})
export class MenuOpenStatusPipe implements PipeTransform {

  constructor(private loc: Location) {
  }

  transform(value: string[] | undefined): boolean {
    const currentPath = this.loc.path();
    const segs: string[] = currentPath.split("/");
    if (value) {
      const homeIndex = value?.findIndex((res) => {
        return res === 'home';
      });
      const urlArray: string[] = [...value];
      urlArray.splice(homeIndex, 1);
      const lastSeg = urlArray[urlArray.length - 1];
      if (segs.includes('overview') || segs[0]==='') { // overview or just / route
        if (lastSeg === '/') {
          return true;
        }
      }
      if (segs.includes(lastSeg)) {
        return true;
      }
    }
    return false;
  }
}
