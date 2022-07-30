import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { FilesDisplayService } from '../../files-display.service';
import { FileUploadService } from '../../upload.service';

@Component({
  selector: 'app-main-history-galleria-view',
  templateUrl: 'galleria.component.html',
  styleUrls: ['./galleria.component.scss']
})
export class HomeHistoryGalleriaViewComponent implements OnInit, OnDestroy {

  activeIndex: number = 0;
  compDest$: Subject<void> = new Subject<void>();

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
    this.fds.getGalleriaCurrentItemIndex$.pipe(
      takeUntil(this.compDest$)
    ).subscribe((res) => {
      this.activeIndex = res;
    })
  }

  onItemChange(index: number) {
    this.fds.setGalleriaItemIndex(+index);
  }

  ngOnDestroy(): void {
    this.compDest$.next();
    this.compDest$.complete();
  }
}
