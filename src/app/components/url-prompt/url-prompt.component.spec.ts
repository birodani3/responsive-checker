import { MatIconModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { FakeTranslateLoader, MockStoreProvider } from '@testing';
import { UrlPromptComponent } from './url-prompt.component';

describe('UrlPromptComponent', () => {
    let component: UrlPromptComponent;
    let fixture: ComponentFixture<UrlPromptComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                BrowserAnimationsModule,
                ReactiveFormsModule,
                MatFormFieldModule,
                MatInputModule,
                MatIconModule,
                FormsModule,
                TranslateModule.forRoot({
                    loader: { provide: TranslateLoader, useClass: FakeTranslateLoader },
                })
            ],
            declarations: [UrlPromptComponent],
            providers: [MockStoreProvider]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UrlPromptComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
