import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, Subject, takeUntil } from 'rxjs';
import { createFormControl2 } from 'src/app/shared/form.utils';
import { FilesDisplayService } from '../../files-display.service';


@Component({
  selector: 'app-main-history-table-filter-area',
  templateUrl: 'filter-area.component.html',
  styleUrls: ['./filter-area.component.scss']
})
export class HomeHistoryTableFilterComponent implements OnInit, OnDestroy {

  inputCtrl?: FormControl;
  onDest$: Subject<void> = new Subject<void>();

  constructor(public fds: FilesDisplayService) {
    this.inputCtrl = createFormControl2(null, false);
  }

  ngOnInit() {
    this.inputCtrl?.valueChanges.pipe(
      takeUntil(this.onDest$),
      debounceTime(400),
      distinctUntilChanged((prev: string, curr: string) => {
        if ((curr === null && prev) || (prev?.trim() !== curr?.trim())) {
          return false;
        }
        return true;
      }),
      map((res: string) => {
        if (res) {
          return res.trim();
        }
        return res;
      }),
    ).subscribe((res) => {
      this.fds.onUserSearchFilter(res);
    });
  }

  clearInput() {
    this.inputCtrl?.reset();
  }

  ngOnDestroy(): void {
    this.onDest$.next();
    this.onDest$.complete();
  }
}
