import { Component, OnInit } from '@angular/core';
import { FilesDisplayService } from '../../files-display.service';
import { FileUploadService } from '../../upload.service';

@Component({
  selector: 'app-main-history-galleria-view',
  templateUrl: 'galleria.component.html',
  styleUrls: ['./galleria.component.scss']
})
export class HomeHistoryGalleriaViewComponent implements OnInit {

  photos: any[] = [];
  activeIndex: number = 0;

  responsiveOptions: any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
  ];

  constructor(public fus: FileUploadService, public fds: FilesDisplayService) {

  }

  ngOnInit() {

  }
}
