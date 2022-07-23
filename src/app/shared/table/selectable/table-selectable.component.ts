import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActionButton, Pagination } from 'src/app/main/store/files-display/files-display.state';
import { PhotoData, PhotoDataRowSelect, TABLE_TOGGLE_ACTION } from 'src/app/main/store/upload/upload.state';


@Component({
  selector: 'app-shared-table-selectable',
  templateUrl: 'table-selectable.component.html',
  styleUrls: ['./table-selectable.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableSelectableComponent implements OnInit, AfterViewInit, OnChanges  {

  @ViewChild(MatSort)
  sort?: MatSort;

  @ViewChild(MatPaginator)
  paginator?: MatPaginator;

  @Input()
  columnIds: string[] = [];

  @Input()
  columnData: PhotoData[] = [];

  @Input()
  tableActionBtns: ActionButton[] | null = [];

  @Input()
  pagination?: Pagination | null;

  @Input()
  selectedRows: PhotoData[] | null = [];

  @Input()
  clearCurrentSelectionTime: number | null = 0;

  @Output()
  pageEvent: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  @Output()
  selectedRowsChange: EventEmitter<PhotoDataRowSelect> = new EventEmitter<PhotoDataRowSelect>();


  dataSource?: MatTableDataSource<PhotoData>;
  selection = new SelectionModel<PhotoData>(true, []);
  columnIdsWithSelect: string[] = [];

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    const changeParamsCount = Object.keys(changes).length;
    if (changes['columnData'] || changes['columnIds'] || changes['pagination']) {

      this.dataSource = new MatTableDataSource<PhotoData>(this.columnData);
      this.columnIdsWithSelect = ['select', ...this.columnIds];
      this.selection = new SelectionModel<PhotoData>(true, []);

      if (this.selectedRows && ((this.selectedRows.length ?? 0) > 0)) {
        console.log("calc")

        // preselect the items on page change
        const selected: PhotoData[] = [];
        this.selectedRows?.forEach((select: PhotoData) => {
          const ind = this.columnData.findIndex((d) => {
            return d.id === select.id;
          });
          if (ind > -1) {
            selected.push(this.columnData[ind]);
          }
        });
        this.selection = new SelectionModel<PhotoData>(true, selected);
      }
    }

    if (changes['clearCurrentSelectionTime']) {
      this.selection = new SelectionModel<PhotoData>(true, []);
    }
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
  }

  onPage(page: PageEvent) {
    this.pageEvent.emit(page);
  }

   /** Whether the number of selected elements matches the total number of rows. */
   isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource?.data.length ?? 0;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  onMasterToggle(event: MatCheckboxChange) {
    if (this.isAllSelected() && this.dataSource) {
      this.selection.clear();
      this.emitSelection(TABLE_TOGGLE_ACTION.REMOVE, this.dataSource.data);
      return;
    }
    if (this.dataSource) {
      this.selection.select(...this.dataSource.data);
      this.emitSelection(TABLE_TOGGLE_ACTION.ADD, this.dataSource.data);
    }
  }

  onRowCheckboxToggle(row: PhotoData, checkBoxChange: MatCheckboxChange): void {
    this.selection.toggle(row)
    if (checkBoxChange.checked) {
      this.emitSelection(TABLE_TOGGLE_ACTION.ADD, [row]);
    } else {
      this.emitSelection(TABLE_TOGGLE_ACTION.REMOVE, [row]);
    }
  }

  emitSelection(type: TABLE_TOGGLE_ACTION, data: PhotoData[]) {
    this.selectedRowsChange.emit({
      action: type,
      photo: data
    });
  }

}
