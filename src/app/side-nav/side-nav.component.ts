import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { NavHeaderList, NavHeader, NavHeaderLink, NestNavHeaderList } from '../shared/models/nav-item.model';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: 'side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit, OnDestroy {

  headerList: NavHeaderList[] = [];
  navTitle: string = "Home";
  compDest$: Subject<any> = new Subject<any>();
  nestedMenu: NestNavHeaderList[] = [];
  openStatus: boolean = true;

  @Output()
  navClose: EventEmitter<any> = new EventEmitter<any>();

  constructor(public router: Router, private cdr: ChangeDetectorRef) {
    this.createAllOptions();
  }

  createAllOptions() {
    this.headerList.push(
      new NavHeaderList(new NavHeader("Upload"), [
        new NavHeaderLink("Upload", "upload", ["/", "home"]),
        new NavHeaderLink("History", "history", ["/", "history"]),
      ]),
      new NavHeaderList(new NavHeader("Help & Settings"), [
        new NavHeaderLink("My Account", "account_circle", ["/", "my-account"]),
      ])
    );
  }

  ngOnInit() {
  }

  onNavClose() {
    this.navClose.emit(true);
  }

  onNavItemClick() {
    //this.navClose.emit(true);
  }

  onTitleClick() {
    this.router.navigate(['/']);
    //this.navClose.emit(true);
  }

  ngOnDestroy() {
    this.compDest$.next(null);
    this.compDest$.complete();
  }
}

