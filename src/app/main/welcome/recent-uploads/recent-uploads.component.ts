import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PhotoData } from '../../store/upload.state';

@Component({
  selector: 'app-main-welcome-recent-uploads',
  templateUrl: 'recent-uploads.component.html',
  styleUrls: ['./recent-uploads.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeWelcomeRecentUploadsComponent implements OnInit, OnChanges {

  @Input()
  recentUploads: PhotoData[] | null = [];

  @Input()
  apiWorking: boolean | null = false;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }
}
