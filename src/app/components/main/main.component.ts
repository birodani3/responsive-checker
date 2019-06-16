import { Component } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import { AppState, selectUrl } from '@store';

@Component({
    selector: 'wr-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent {
    public url$: Observable<string>;

    constructor(private store: Store<AppState>) {
        this.url$ = this.store.pipe(select(selectUrl));
    }
}
