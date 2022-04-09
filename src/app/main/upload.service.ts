import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store/global/app.reducer';
import * as fromUploadActions from './store/upload.actions';
import * as fromUploadSelectors from './store/upload.selectors';
import { UploadFile } from './store/upload.state';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {


  filesUploadingAll$: Observable<UploadFile[]> = this.store.select(fromUploadSelectors.selectAll);
  anyFilesUploading$: Observable<boolean> = this.store.select(fromUploadSelectors.isUploadFileLoading);

  constructor(private store: Store<AppState>) {
  }

  attachFile(file: File, fileId: string): void {
    this.store.dispatch(fromUploadActions.attachFile({ file, fileId }));
  }

}
