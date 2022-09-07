import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { githubVersionValidator } from 'src/app/shared/form-validators/async.validators';
import { createFormControl2 } from 'src/app/shared/form.utils';
import { HttpService, versionUrl } from 'src/app/shared/services/http.service';



@Component({
  selector: 'app-account-version-test',
  templateUrl: 'version-test.component.html',
  styleUrls: ['./version-test.component.scss']
})

export class MyAccountVersionTestComponent implements OnInit {

  versionFc?: FormControl;

  constructor(http: HttpService) {
    this.versionFc = createFormControl2(null, false, [Validators.required],
      [githubVersionValidator(http, versionUrl)]);
  }

  ngOnInit() {
  }
}
