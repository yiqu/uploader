import { Component, Input, OnInit } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'shared-progress-spinner',
  templateUrl: 'loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingProgressComponent implements OnInit {

  @Input()
  progress: number = 0;

  @Input()
  mode: ProgressSpinnerMode = 'indeterminate';

  @Input()
  diameter: number = 25;

  constructor() {
  }

  ngOnInit() {
  }
}
