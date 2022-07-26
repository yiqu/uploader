import { Pipe, PipeTransform } from '@angular/core';
import memo from 'memo-decorator';
import { PhotoData } from 'src/app/main/store/upload/upload.state';

@Pipe({
  name: 'photoDataUrl',
  pure: true
})
export class PhotoDataUrlPipe implements PipeTransform {

  transform(value: PhotoData[]): any {
    return '';
  }
}

