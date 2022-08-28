import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authentication/auth.service';

@Component({
  selector: 'app-my-account',
  templateUrl: 'account.component.html',
  styleUrls: ['./account.component.scss']
})
export class MyAccountComponent implements OnInit {

  constructor(public as: AuthService) {
  }

  ngOnInit() {

  }
}
