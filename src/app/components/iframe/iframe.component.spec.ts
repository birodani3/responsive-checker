import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ElementRef } from '@angular/core';

import { IframeComponent, RulerComponent } from '@components';
import { MockStoreProvider } from '@testing';
import { TimesPipe } from '@pipes';

describe('IframeComponent', () => {
    let component: IframeComponent;
    let fixture: ComponentFixture<IframeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IframeComponent, RulerComponent, TimesPipe],
            providers: [MockStoreProvider]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IframeComponent);
        component = fixture.componentInstance;
        component.iframe = <ElementRef<HTMLIFrameElement>>{ nativeElement: {} };
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
