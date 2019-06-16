import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from '@components';

/*
 * The whole app could be one new feature on the webymon.com, so routing is not necessary.
 */
const routes: Routes = [
    { path: '', component: MainComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
