import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-shared-table-selectable',
  templateUrl: 'table-selectable.component.html',
  styleUrls: ['./table-selectable.component.scss']
})
export class TableSelectableComponent implements OnInit, AfterViewInit, OnChanges  {

  @ViewChild(MatSort)
  sort?: MatSort;

  @Input()
  columnIds: string[] = [];

  @Input()
  columnData: any[] = [];

  dataSource?: MatTableDataSource<any>;

  constructor() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource(this.columnData);
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

  }
}
