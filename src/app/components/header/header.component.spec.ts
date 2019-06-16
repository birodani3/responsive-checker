import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatToolbarModule, MatMenuModule } from '@angular/material';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { HeaderComponent, LanguageSelectorComponent } from '@components';
import { FakeTranslateLoader, MockStoreProvider } from '@testing';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                MatToolbarModule,
                MatMenuModule,
                TranslateModule.forRoot({
                    loader: { provide: TranslateLoader, useClass: FakeTranslateLoader },
                })
            ],
            declarations: [
                HeaderComponent,
                LanguageSelectorComponent
            ],
            providers: [MockStoreProvider]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
