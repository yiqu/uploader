import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { take } from 'rxjs';
import { AuthService } from 'src/app/authentication/auth.service';
import { RestService } from 'src/app/shared/services/rest.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { PhotoData, UploadFile } from '../store/upload.state';
import { FileUploadService } from '../upload.service';
import { ZorroToasterService } from '../../shared/services/toaster-zorro.service';
import { ProgressSnackbarService } from 'src/app/progress-snackbar/progress-snackbar.service';

@Component({
  selector: 'app-main-all',
  templateUrl: 'all.component.html',
  styleUrls: ['./all.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('uploadInput')
  uploadInput?: ElementRef;

  constructor(public fs: FileUploadService, private rs: StorageService, public as: AuthService,
    private ts: ZorroToasterService, public pss: ProgressSnackbarService) {
  }

  ngOnInit() {
    this.pss.getProgressSnackbar({
      fileStatus: this.fs.filesUploadingAll$,
      isFilesUploadFinished: this.fs.isFilesUploadFinished$,
      uploadingsAndTotalFiles: this.fs.uploadingsAndTotalFiles$
    });
  }

  onFileUpload() {
    const uploadEle = this.uploadInput?.nativeElement as HTMLInputElement;
    if (uploadEle) {
      this.as.currentUser$.pipe(
        take(1)
      ).subscribe((user) => {
        if (user) {
          uploadEle.click();
        } else {
          this.ts.openSingletonToast("warning", 'You are not logged in.')
        }
      });

    }
  }

  onFileInputClick(event: any) {
    const files: FileList | undefined = event.target?.files;
    if (files) {
      this.fs.cleanUpAttachedFiles();
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
