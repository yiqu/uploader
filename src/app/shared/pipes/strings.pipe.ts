import { Pipe, PipeTransform } from '@angular/core';
import memo from 'memo-decorator';

@Pipe({
  name: 'stringSliceCutoff',
  pure: true
})

export class StringSliceDisplayPipe implements PipeTransform {

  @memo()
  transform(value: string | undefined | null, cutOff: number): string {
    if (value) {
      return (value.slice(0, cutOff) + '..');
    }
    return value + '';
  }
}
