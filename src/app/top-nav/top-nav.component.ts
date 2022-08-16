import { Component, OnInit, EventEmitter, Output, OnDestroy, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject, timer } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';
import { MenuItem } from '../shared/models/nav-item.model';
import { environment } from '../../environments/environment';
import { FormControl } from '@angular/forms';
import { IsMobileService } from '../shared/services/is-mobile.service';
import { trigger, transition, useAnimation } from '@angular/animations';
import { AuthService } from '../authentication/auth.service';
import { TopNavService } from './top-nav.service';

const defaultProfileImg: string = "assets/user/default-user5.png";

@Component({
  selector: 'app-top-nav',
  templateUrl: 'top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
  animations: [
  ],
})
export class TopNavComponent implements OnInit, OnDestroy, AfterViewInit {

  headerTitle: string = "Uploader";
  compDest$: Subject<any> = new Subject<any>();
  logoShakeState?: any = null;
  leftNavMenuState: boolean = false;
  swingState: boolean = false;
  avartarImgSrc: string = defaultProfileImg;


  @Output()
  navToggle: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  logoClick: EventEmitter<any> = new EventEmitter<any>();

  constructor(public router: Router, public route: ActivatedRoute, public ts: TopNavService,
    public as: AuthService) {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
  }

  onLogoClick() {
    this.logoClick.emit();
    this.logoShakeState = !this.logoShakeState;
  }

  onMenuClick() {
    this.navToggle.emit(true);
  }


  onAuthClick() {
    this.router.navigate(['auth']);
  }

  onMenuItemClick(item: MenuItem) {
    if (item.id === "account") {
      this.router.navigate(['/', 'my-account']);
    } else if (item.id === "signout") {
      this.onSignoutClick();
    } else if (item.id === "signin") {
      this.onAuthClick();
    }
  }

  onSignoutClick() {
    this.as.userLogout();
  }


  ngOnDestroy() {
    this.compDest$.next(null);
    this.compDest$.complete();
  }
}
