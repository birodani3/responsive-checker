import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockStoreProvider } from '@testing';
import { TimesPipe } from '@pipes';
import { RulerComponent } from './ruler.component';

describe('RulerComponent', () => {
    let component: RulerComponent;
    let fixture: ComponentFixture<RulerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                RulerComponent,
                TimesPipe
            ],
            providers: [MockStoreProvider]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RulerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
