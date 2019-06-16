import { Component, ViewChild, OnDestroy, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MatMenuTrigger } from '@angular/material';

import { Store } from '@ngrx/store';

import { dimensionsChangeAction, rotateScreenAction, urlChangeAction } from '@store/actions';
import { Device, Dimensions, StringKeyed } from '@models';
import { untilDestroyed } from '@operators';
import { IframeService } from '@services';
import { AppState } from '@store';
import { devices } from '../../devices';

@Component({
    selector: 'wr-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
    private readonly NON_ZERO_INTEGER_REGEXP = /^[1-9]\d*$/;
    @ViewChild(MatMenuTrigger, { static: true })
    private menuTrigger: MatMenuTrigger;
    public devices: StringKeyed<Device[]>;
    public customDeviceForm: FormGroup;

    constructor(private store: Store<AppState>, private iframeService: IframeService, private fb: FormBuilder) {
        const validators = Validators.compose([Validators.required, Validators.pattern(this.NON_ZERO_INTEGER_REGEXP)]);
        this.devices = devices;
        this.customDeviceForm = this.fb.group({
            customWidth: ['', validators],
            customHeight: ['', validators]
        });
    }

    public ngOnInit(): void {
        this.menuTrigger.menuClosed.pipe(untilDestroyed(this)).subscribe(() => {
            if (this.customDeviceForm.valid) {
                const dimensions: Dimensions = {
                    width: this.customDeviceForm.get('customWidth').value,
                    height: this.customDeviceForm.get('customHeight').value
                };

                this.store.dispatch(dimensionsChangeAction({ dimensions }));
            }

            this.customDeviceForm.reset();
        });
    }

    public ngOnDestroy(): void {}

    public setDimensions(device: Device): void {
        this.store.dispatch(dimensionsChangeAction({ dimensions: device.dimensions }));
    }

    public rotateScreen(): void {
        this.store.dispatch(rotateScreenAction());
    }

    public refreshPage(): void {
        this.iframeService.reloadIframe();
    }

    public resetUrl(): void {
        this.store.dispatch(urlChangeAction({ url: null }));
    }
}
