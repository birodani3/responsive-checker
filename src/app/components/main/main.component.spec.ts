import { MatTooltipModule, MatMenuModule, MatIconModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { SidebarComponent, IframeComponent, UrlPromptComponent, RulerComponent } from '@components';
import { FakeTranslateLoader, MockStoreProvider } from '@testing';
import { MainComponent } from './main.component';
import { TimesPipe } from '@pipes';

describe('MainComponent', () => {
    let component: MainComponent;
    let fixture: ComponentFixture<MainComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                BrowserAnimationsModule,
                ReactiveFormsModule,
                MatFormFieldModule,
                MatTooltipModule,
                MatInputModule,
                MatMenuModule,
                MatIconModule,
                FormsModule,
                TranslateModule.forRoot({
                    loader: { provide: TranslateLoader, useClass: FakeTranslateLoader },
                })
            ],
            declarations: [
                UrlPromptComponent,
                SidebarComponent,
                IframeComponent,
                RulerComponent,
                MainComponent,
                TimesPipe,
            ],
            providers: [MockStoreProvider]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MainComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
