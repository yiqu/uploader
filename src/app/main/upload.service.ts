import { Injectable } from '@angular/core';
import { AngularFireUploadTask } from '@angular/fire/compat/storage';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FirebaseDocObsAndId } from '../shared/models/general.model';
import { RestService } from '../shared/services/rest.service';
import { StorageService, UploadTask } from '../shared/services/storage.service';
import { AppState } from '../store/global/app.reducer';
import * as fromUploadActions from './store/upload.actions';
import * as fromUploadSelectors from './store/upload.selectors';
import { FilesUploadingStatus, PhotoData, UploadFile } from './store/upload.state';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {


  filesUploadingAll$: Observable<UploadFile[]> = this.store.select(fromUploadSelectors.selectAll);
  anyFilesUploading$: Observable<boolean> = this.store.select(fromUploadSelectors.isUploadFileLoading);
  filesUploaded$: Observable<PhotoData[]> = this.store.select(fromUploadSelectors.filesUploaded);
  isFilesUploadFinished$: Observable<boolean> = this.store.select(fromUploadSelectors.isFilesUploadFinished);
  uploadingsAndTotalFiles$: Observable<FilesUploadingStatus> = this.store.select(fromUploadSelectors.filesUploadingAndUploaded);

  constructor(private store: Store<AppState>, private ss: StorageService, private rs: RestService) {
  }

  attachFile(file: File, fileId: string): void {
    this.store.dispatch(fromUploadActions.attachFile({ file, fileId }));
  }

  cleanUpAttachedFiles(): void {
    this.store.dispatch(fromUploadActions.cleanUpAttachedFiles());
  }

  uploadFile(file: any, fileName: string): UploadTask {
    return this.ss.uploadBlob(file, fileName);
  }

  addPhotoUrl(photo: PhotoData, user: string): FirebaseDocObsAndId {
    return this.rs.addDocumentToCollection(photo, user + '/photos');
  }

  getUserPhotos<T>(userEmail: string): Observable<T[]> {
    const url = userEmail + '/' + 'photos';
    return this.rs.getCollection(url);
  }

}
