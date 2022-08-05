import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { NavHeaderList, NavHeader, NavHeaderLink } from '../shared/models/nav-item.model';
import { Router } from '@angular/router';
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

  headerList: NavHeaderList[] = [];
  navTitle: string = "Home";
  compDest$: Subject<any> = new Subject<any>();
  openStatus: boolean = true;

  @Output()
  navClose: EventEmitter<any> = new EventEmitter<any>();

  constructor(public router: Router, private cdr: ChangeDetectorRef, public sns: SideNavigationService) {
    this.createAllOptions();
  }

  createAllOptions() {
    this.headerList.push(
      new NavHeaderList(new NavHeader("Upload"), [
        new NavHeaderLink("Upload", "upload", ["/", "home", "upload"]),
        new NavHeaderLink("My Files", "history", ["/", "home", "history"]),
      ]),
      new NavHeaderList(new NavHeader("Help & Settings"), [
        new NavHeaderLink("My Account", "account_circle", ["/", "my-account"]),
        new NavHeaderLink("Auth", "account_circle", ["/", "auth"]),
        new NavHeaderLink("Signin", "account_circle", ["/", "auth", 'signin']),
        new NavHeaderLink("Signup", "account_circle", ["/", "auth", 'signup']),
      ])
    );
  }

  ngOnInit() {
    this.sns.sideNavOptions$.subscribe((res) => {
      console.log(res)
    })
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

