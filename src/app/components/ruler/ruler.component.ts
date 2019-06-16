import { Component } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import { AppState, selectDimensions } from '@store';
import { map } from 'rxjs/operators';

@Component({
    selector: 'wr-ruler',
    templateUrl: './ruler.component.html',
    styleUrls: ['./ruler.component.scss']
})
export class RulerComponent {
    public hundreds$: Observable<number>;

    constructor(private store: Store<AppState>) {
        this.hundreds$ = this.store.pipe(
            select(selectDimensions),
            map(dimensions => Math.ceil(dimensions.width / 100))
        );
    }
}
