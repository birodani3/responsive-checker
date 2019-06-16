import { Component } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import { languageChangeAction } from '@store/actions';
import { AppState, selectLanguage } from '@store';
import { Language } from '@models';

@Component({
    selector: 'wr-language-selector',
    templateUrl: './language-selector.component.html',
    styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent {
    public languages: Language[];
    public selectedLanguage$: Observable<Language>;

    constructor(private store: Store<AppState>) {
        this.languages = Object.values(Language);
        this.selectedLanguage$ = this.store.pipe(select(selectLanguage));
    }

    public changeLanguage(language: Language): void {
        this.store.dispatch(languageChangeAction({ language }));
    }
}
