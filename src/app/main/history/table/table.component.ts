import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../../upload.service';

@Component({
  selector: 'app-main-history-table-view',
  templateUrl: 'table.component.html',
  styleUrls: ['./table.component.scss']
})
export class HomeHistoryTableViewComponent implements OnInit {


  constructor(public fus: FileUploadService) {
  }

  ngOnInit() {

  }
}
