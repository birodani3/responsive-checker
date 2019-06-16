import { FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';

import { Store } from '@ngrx/store';

import { urlChangeAction } from '@store/actions';
import { AppState } from '@store';

@Component({
    selector: 'wr-url-prompt',
    templateUrl: './url-prompt.component.html',
    styleUrls: ['./url-prompt.component.scss']
})
export class UrlPromptComponent {
    // tslint:disable-next-line: max-line-length
    private readonly URL_REGEXP = /^(?:https:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
    public urlFormControl: FormControl;

    constructor(private store: Store<AppState>) {
        this.urlFormControl = new FormControl('', Validators.compose([
            Validators.required,
            Validators.pattern(this.URL_REGEXP)
        ]));
    }

    public setUrl(): void {
        let url: string = this.urlFormControl.value;

        // The 'https://' prefix is necessary for the iFrame.
        // We are not checking for 'http' prefixes here, because the RegExp filters those urls out.
        if (!url.startsWith('https://')) {
            url = `https://${url}`;
        }

        if (this.urlFormControl.valid) {
            this.store.dispatch(urlChangeAction({ url }));
        }
    }
}
