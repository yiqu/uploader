import { Component, OnInit } from '@angular/core';
import { FilesDisplayService } from '../../files-display.service';
import { FileUploadService } from '../../upload.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-main-history-table-view',
  templateUrl: 'table.component.html',
  styleUrls: ['./table.component.scss']
})
export class HomeHistoryTableViewComponent implements OnInit {


  constructor(public fus: FileUploadService, public fds: FilesDisplayService) {
  }

  ngOnInit() {
  }

  onPage(page: PageEvent) {
    this.fds.setCurrentPage(page.pageIndex);
  }
}
