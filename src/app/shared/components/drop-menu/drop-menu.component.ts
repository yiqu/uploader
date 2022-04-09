import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MenuOption } from '../../models/drop-menu.model';

@Component({
  selector: 'shared-drop-menu',
  templateUrl: 'drop-menu.component.html',
  styleUrls: ['./drop-menu.component.scss']
})
export class SharedDropMenuComponent implements OnInit, OnChanges {

  @Input()
  menuOptions: MenuOption[] = [];

  @Output()
  menuSelect: EventEmitter<MenuOption> = new EventEmitter<MenuOption>();


  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  onMenuOptClick(opt: MenuOption) {
    this.menuSelect.emit(opt);
  }
}
