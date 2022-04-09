import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/global/app.reducer';
import * as fromPageTitleSelectors from '../../store/page-title/page-title.selectors';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  public getPageTitle$: Observable<string> = this.store.select(fromPageTitleSelectors.getPageTitle);

  constructor(private ts: Title, private store: Store<AppState>) {
  }

  public setTitle(title: string): void {
    this.ts.setTitle(title);
  }

}
