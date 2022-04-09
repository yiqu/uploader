import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { UploadFile } from '../store/upload.state';

@Component({
  selector: 'app-upload-item',
  templateUrl: 'upload-item.component.html',
  styleUrls: ['./upload-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UploadItemComponent implements OnInit {

  @Input()
  file?: UploadFile;

  constructor() {
  }

  ngOnInit() {
  }
}
