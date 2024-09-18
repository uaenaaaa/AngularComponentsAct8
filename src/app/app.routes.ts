import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DisplayhelloworldComponent } from './displayhelloworld/displayhelloworld.component';
import { ShowhellobuttonComponent } from './showhellobutton/showhellobutton.component';

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
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
