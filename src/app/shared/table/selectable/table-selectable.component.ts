import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PhotoData } from 'src/app/main/store/upload/upload.state';


@Component({
  selector: 'app-shared-table-selectable',
  templateUrl: 'table-selectable.component.html',
  styleUrls: ['./table-selectable.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableSelectableComponent implements OnInit, AfterViewInit, OnChanges  {

  @ViewChild(MatSort)
  sort?: MatSort;

  @Input()
  columnIds: string[] = [];

  @Input()
  columnData: PhotoData[] = [];

  dataSource?: MatTableDataSource<PhotoData>;
  selection = new SelectionModel<PhotoData>(true, []);
  columnIdsWithSelect: string[] = [];

  constructor() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource<PhotoData>(this.columnData);
    this.columnIdsWithSelect = ['select', ...this.columnIds];
    console.log(this.columnData)
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
  }

   /** Whether the number of selected elements matches the total number of rows. */
   isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource?.data.length ?? 0;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    if (this.dataSource) {
      this.selection.select(...this.dataSource.data);
    }
  }

}
