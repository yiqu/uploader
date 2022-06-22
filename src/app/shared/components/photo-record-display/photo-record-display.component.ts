import { Component, Input, OnInit } from '@angular/core';
import { PhotoData } from 'src/app/main/store/upload/upload.state';

@Component({
  selector: 'app-shared-photo-record-display',
  templateUrl: 'photo-record-display.component.html',
  styleUrls: ['./photo-record-display.component.scss']
})
export class PhotoRecordDisplayComponent implements OnInit {

  @Input()
  photo?: PhotoData;

  constructor() {
  }

  ngOnInit() {
  }
}
