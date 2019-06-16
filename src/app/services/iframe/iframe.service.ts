import { Injectable } from '@angular/core';

import { Subject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class IframeService {
    private reloadSource$: Subject<void>;
    public reload$: Observable<void>;

    constructor() {
        this.reloadSource$ = new Subject<void>();
        this.reload$ = this.reloadSource$.asObservable();
    }

    public reloadIframe(): void {
        this.reloadSource$.next();
    }
}
