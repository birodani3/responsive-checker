import { Component } from '@angular/core';

import { Store } from '@ngrx/store';

import { TranslateService } from '@ngx-translate/core';

import { languageChangeAction } from '@store/actions';
import { AppState } from '@store';
import { Language } from '@models';

@Component({
    selector: 'wr-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(store: Store<AppState>, translateService: TranslateService) {
        translateService.setDefaultLang('en');
        store.dispatch(languageChangeAction({ language: <Language>navigator.language.substring(0, 2) }));
    }
}
