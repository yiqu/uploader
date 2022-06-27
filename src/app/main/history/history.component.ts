import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/authentication/auth.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { ZorroToasterService } from 'src/app/shared/services/toaster-zorro.service';
import { FilesDisplayService } from '../files-display.service';
import { FilesDisplayTab } from '../store/files-display/files-display.state';
import { FileUploadService } from '../upload.service';

@Component({
  selector: 'app-main-history',
  templateUrl: 'history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HomeHistoryComponent implements OnInit {
  constructor(public fs: FileUploadService, private rs: StorageService, public as: AuthService,
    private ts: ZorroToasterService, public ufds: FilesDisplayService) {
  }

  ngOnInit() {
    this.fs.getUserFiles();
  }

  onTabClick(tab: FilesDisplayTab): void {
    this.ufds.setUserFilesDisplayTab(tab);
  }
}
