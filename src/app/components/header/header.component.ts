import { Component } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import { AppState, selectDimensions, selectUrl } from '@store';
import { Dimensions } from '@models';

@Component({
  selector: 'wr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    public url$: Observable<string>;
    public dimensions$: Observable<Dimensions>;

    constructor(private store: Store<AppState>) {
        this.url$ = this.store.pipe(select(selectUrl));
        this.dimensions$ = this.store.pipe(select(selectDimensions));
    }
}
