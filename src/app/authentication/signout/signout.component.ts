import { Component, OnInit } from '@angular/core';
import { map, startWith, timer, take, scan, finalize, tap } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth-signout',
  templateUrl: 'signout.component.html',
  styleUrls: ['./signout.component.scss']
})
export class AuthSignoutComponent implements OnInit {

  timer?: number;
  countDown: number = 3;

  constructor(public as: AuthService) {
  }

  ngOnInit() {
    timer(0, 1000).pipe(
      take(this.countDown),
      map((res) => {
        return Math.abs(res - this.countDown);
      }),
      tap((count) => {
        this.timer = count;
      }),
      finalize(() => {
        console.log("Logging out.")
      })
    ).subscribe();
  }
}
