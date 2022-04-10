import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UploadFile } from '../store/upload.state';

@Component({
  selector: 'app-upload-item',
  templateUrl: 'upload-item.component.html',
  styleUrls: ['./upload-item.component.scss'],
})
export class UploadItemComponent implements OnInit, OnChanges {

  @Input()
  file?: UploadFile;

  imgPreview: any;
  reader = new FileReader();
  imgId?: string;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.imgId !== changes['file'].currentValue.id) {
      if (this.file?.file) {
        this.reader.onload = e => this.imgPreview = this.reader.result;
        this.reader.readAsDataURL(this.file?.file as any);
      }
    }
    if (!this.imgId) {
      this.imgId = this.file?.id;
    }
  }
}
