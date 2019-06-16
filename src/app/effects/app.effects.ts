import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';

import { TranslateService } from '@ngx-translate/core';

import { map, tap, withLatestFrom } from 'rxjs/operators';

import { languageChangeAction } from '@store/actions';
import { AppState, selectAppState } from '@store';
import { StorageService } from '@services';
import { Language } from '@models';

@Injectable()
export class AppEffects {
    constructor(
        private actions$: Actions,
        private store: Store<AppState>,
        private storageService: StorageService,
        private translateService: TranslateService
    ) {}

    public initializeApp$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ROOT_EFFECTS_INIT),
            map(() => {
                const language = <Language>navigator.language.substring(0, 2);

                return this.storageService.getRestoreAction() || languageChangeAction({ language });
            })
        )
    );

    public saveStateToStorage$ = createEffect(() =>
        this.actions$.pipe(
            withLatestFrom(this.store.pipe(select(selectAppState))),
            tap(([action, state]) => {
                this.storageService.saveState(state);
            })
        ),
        { dispatch: false }
    );

    public setLanguage$ = createEffect(() =>
        this.actions$.pipe(
            ofType(languageChangeAction),
            tap(({ language }) => {
                this.translateService.use(language);
            })
        ),
        { dispatch: false }
    );
}
