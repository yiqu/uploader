import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/compat/storage';
import * as moment from 'moment';

const UPLOADER_BASE_URL: string = 'uploader-app';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: AngularFireStorage) {
  }

  uploadBlob(blobFile: any, fileName: string): AngularFireUploadTask {
    const filePath = UPLOADER_BASE_URL + '/' + this.getCurrentTime() + '/' + fileName;
    const ref = this.storage.ref(filePath);
    const task: AngularFireUploadTask = ref.put(blobFile);
    return task;
  }

  private getCurrentTime(): string {
    return moment().format("MM-DD-YYYY");
  }

}
