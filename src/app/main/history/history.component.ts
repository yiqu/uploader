import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private ts: ZorroToasterService, public ufds: FilesDisplayService, private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.fs.getUserFiles();
  }

  onTabClick(tab: FilesDisplayTab): void {
    this.router.navigate(['./', tab.url], { relativeTo: this.route });
  }


}
