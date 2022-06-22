import { Component, Input, OnInit } from '@angular/core';
import { IVerifiedUser } from 'src/app/shared/models/user.model';
import { PhotoData } from '../store/upload/upload.state';
import { FileUploadService } from '../upload.service';

@Component({
  selector: 'app-main-welcome',
  templateUrl: 'welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class HomeWelcomeBoxComponent implements OnInit {

  @Input()
  currentUser: IVerifiedUser | undefined | null;

  @Input()
  fileList: PhotoData[] = [];

  constructor(public us: FileUploadService) {
  }

  ngOnInit() {
  }
}
