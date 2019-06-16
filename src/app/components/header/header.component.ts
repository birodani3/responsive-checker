import { Component } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import { AppState, selectDimensions } from '@store';
import { Dimensions } from '@models';

@Component({
  selector: 'wr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    public dimensions$: Observable<Dimensions>;

    constructor(private store: Store<AppState>) {
        this.dimensions$ = this.store.pipe(select(selectDimensions));
    }
}
