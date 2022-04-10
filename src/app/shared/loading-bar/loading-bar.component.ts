import { Component, Input, OnInit } from '@angular/core';
import { ProgressBarMode } from '@angular/material/progress-bar';

@Component({
  selector: 'shared-loading-bar',
  templateUrl: 'loading-bar.component.html',
  styleUrls: ['./loading-bar.component.scss']
})
export class LoadingBarComponent implements OnInit {

  @Input()
  progress?: number;

  @Input()
  mode: ProgressBarMode = 'indeterminate';

  constructor() {
  }

  ngOnInit() { }
}
