import { TranslateLoader } from '@ngx-translate/core';

import { Observable, of } from 'rxjs';

export class FakeTranslateLoader implements TranslateLoader {
    public getTranslation(lang: string): Observable<any> {
        return of({});
    }
}
