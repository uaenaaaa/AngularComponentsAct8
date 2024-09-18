import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DisplayhelloworldComponent } from './displayhelloworld/displayhelloworld.component';
import { ShowhellobuttonComponent } from './showhellobutton/showhellobutton.component';
import { DisplaynameComponent } from './displayname/displayname.component';

export const routes: Routes = [
    {
        title: 'Component #1: Display Hello World',
        component: DisplayhelloworldComponent,
        path: 'hello-world',
    },
    {
        title: 'Component #2: Show Hello Button',
        component: ShowhellobuttonComponent,
        path: 'hello-button'
    },
    {
        title: 'Component #3: Display User\'s name',
        component: DisplaynameComponent,
        path: 'display-name'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
