import { MatToolbarModule, MatMenuModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, async } from '@angular/core/testing';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { HeaderComponent, LanguageSelectorComponent } from '@components';
import { FakeTranslateLoader, MockStoreProvider } from '@testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                MatToolbarModule,
                MatMenuModule,
                TranslateModule.forRoot({
                    loader: { provide: TranslateLoader, useClass: FakeTranslateLoader },
                })
            ],
            declarations: [
                AppComponent,
                HeaderComponent,
                LanguageSelectorComponent
            ],
            providers: [MockStoreProvider]
        }).compileComponents();
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });
});
