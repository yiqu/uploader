import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Subject, throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild("snav")
  sideNav!: MatSidenav;


  constructor(public changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit() {
  }


  /**
   * Initialize Firebase.
   * NOTE: Injecting AngularFire will auto initializeApp
   */
  initFirebase() {
  }

  onTopNavMenuClick() {
    if (this.sideNav) {
      this.sideNav.toggle();
    }
  }

  onNavClose() {
    if (this.sideNav) {
      this.sideNav.close();
    }
  }

  onTopNavLogoClick() {
  }

}
