import { Component, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppState, selectUrl, selectDimensions } from '@store';
import { untilDestroyed } from '@operators';
import { IframeService } from '@services';
import { Dimensions } from '@models';

@Component({
  selector: 'wr-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.scss']
})
export class IframeComponent implements OnInit, OnDestroy {
    @ViewChild('iframe', { static: true })
    public iframe: ElementRef<HTMLIFrameElement>;
    public dimensions$: Observable<Dimensions>;
    public url$: Observable<SafeResourceUrl>;

    constructor(private store: Store<AppState>, private sanitizer: DomSanitizer, private iframeService: IframeService) {
        this.dimensions$ = this.store.pipe(select(selectDimensions));
        this.url$ = this.store.pipe(
            select(selectUrl),
            map(this.sanitizer.bypassSecurityTrustResourceUrl)
        );
    }

    public ngOnInit(): void {
        this.iframeService.reload$.pipe(untilDestroyed(this)).subscribe(() => {
            this.iframe.nativeElement.src = this.iframe.nativeElement.src;
        });
    }

    public ngOnDestroy(): void {}
}
