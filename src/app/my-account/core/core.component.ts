import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/authentication/auth.service';

@Component({
  selector: 'app-my-account-core',
  templateUrl: 'core.component.html',
  styleUrls: ['./core.component.scss']
})
export class MyAccountCoreComponent implements OnInit {

  constructor(public as: AuthService) {
  }

  ngOnInit() {

  }
}
