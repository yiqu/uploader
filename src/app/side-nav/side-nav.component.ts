import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { NavHeaderList, NavHeader, NavHeaderLink } from '../shared/models/nav-item.model';
import { IsActiveMatchOptions, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ChangeDetectorRef } from '@angular/core';
import { SideNavigationService } from './side-nav.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: 'side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit, OnDestroy {

  navTitle: string = "Home";
  compDest$: Subject<any> = new Subject<any>();
  openStatus: boolean = true;
  routerLinkActiveOpt: IsActiveMatchOptions = {
    matrixParams:'subset',
    queryParams:'exact',
    paths:'subset',
    fragment:'ignored'
  };

  @Output()
  navClose: EventEmitter<any> = new EventEmitter<any>();

  constructor(public router: Router, private cdr: ChangeDetectorRef, public sns: SideNavigationService) {
  }

  ngOnInit() {
  }

  onNavClose() {
    this.navClose.emit(true);
  }

  onNavItemClick() {
  }

  onTitleClick() {
    this.router.navigate(['/']);
  }

  ngOnDestroy() {
    this.compDest$.next(null);
    this.compDest$.complete();
  }
}

