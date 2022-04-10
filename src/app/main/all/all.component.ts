import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UploadFile } from '../store/upload.state';
import { FileUploadService } from '../upload.service';

@Component({
  selector: 'app-main-all',
  templateUrl: 'all.component.html',
  styleUrls: ['./all.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('uploadInput')
  uploadInput?: ElementRef;

  constructor(public fs: FileUploadService) {
  }

  ngOnInit() {
  }

  onFileUpload() {
    const uploadEle = this.uploadInput?.nativeElement as HTMLInputElement;
    if (uploadEle) {
      uploadEle.click();
    }
  }

  onFileInputClick(event: any) {
    const files: FileList | undefined = event.target?.files;
    if (files) {
      const fileIndexArr = Object.keys(files);
      fileIndexArr.forEach((index: any) => {
        this.fs.attachFile(files[index], new Date().getTime() + index + '');
      });
    }
  }

  trackById(index: number, uploadFile: UploadFile) {
    return uploadFile.id;
  }
}
