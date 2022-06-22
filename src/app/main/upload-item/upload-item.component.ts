import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UploadFile } from '../store/upload/upload.state';

const imgTypes = ["image/jpeg", "image/png", "image/gif"];

@Component({
  selector: 'app-upload-item',
  templateUrl: 'upload-item.component.html',
  styleUrls: ['./upload-item.component.scss'],
})
export class UploadItemComponent implements OnInit, OnChanges {

  @Input()
  file?: UploadFile;

  imgPreview: any;
  isImgType: boolean = false;
  reader = new FileReader();
  imgId?: string;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.imgId !== changes['file'].currentValue.id) {
      if (this.file?.file) {
        if (imgTypes.includes(this.file.file.type)) {
          this.isImgType = true;
        } else {
          this.isImgType = false;
        }
        this.reader.onload = e => this.imgPreview = this.reader.result;
        this.reader.readAsDataURL(this.file?.file as any);
      }
    }
    if (!this.imgId) {
      this.imgId = this.file?.id;
    }
  }
}
