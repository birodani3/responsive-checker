import { MatToolbarModule, MatInputModule, MatIconModule, MatButtonModule, MatMenuModule, MatTooltipModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule, InjectionToken } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, ActionReducerMap } from '@ngrx/store';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import {
    MainComponent,
    HeaderComponent,
    UrlPromptComponent,
    IframeComponent,
    SidebarComponent,
    LanguageSelectorComponent,
    RulerComponent
} from '@components';
import { AppEffects } from '@effects';
import { TimesPipe } from '@pipes';
import { reducers, AppState } from '@store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<AppState>>('root reducer');

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

/**
 * @author Daniel Biro
 *
 * @description WebApplication for checking website's responsiveness
 *
 * I'm usually using separate folders for features, but since the app is small, I decided to use this structure.
 * Features (and routes) could be separeted to modules, but for the same reason, I only used one module.
 */
@NgModule({
    declarations: [
        UrlPromptComponent,
        HeaderComponent,
        IframeComponent,
        MainComponent,
        AppComponent,
        SidebarComponent,
        LanguageSelectorComponent,
        RulerComponent,
        TimesPipe
    ],
    imports: [
        BrowserAnimationsModule,
        AppRoutingModule,
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot(REDUCER_TOKEN),
        EffectsModule.forRoot([AppEffects]),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        MatTooltipModule,
        MatToolbarModule,
        MatButtonModule,
        MatInputModule,
        MatMenuModule,
        MatIconModule
    ],
    providers: [{
        provide: REDUCER_TOKEN,
        useValue: reducers
    }],
    bootstrap: [AppComponent]
})
export class AppModule {}
