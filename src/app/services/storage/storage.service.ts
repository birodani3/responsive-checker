import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';

import { restoreStateAction } from '@store/actions';
import { AppState } from '@store';

@Injectable({
    providedIn: 'root'
})
export class StorageService {
    private readonly LOCAL_STORAGE_STATE_KEY = '_webymon-responsive-state';

    constructor() {}

    public saveState(state: AppState): void {
        localStorage.setItem(this.LOCAL_STORAGE_STATE_KEY, JSON.stringify(state));
    }

    public getRestoreAction(): Action | null {
        const stateString = localStorage.getItem(this.LOCAL_STORAGE_STATE_KEY);

        return stateString ? restoreStateAction({ newState: JSON.parse(stateString) }) : null;
    }
}
