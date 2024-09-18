import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DisplayhelloworldComponent } from '@app/displayhelloworld/displayhelloworld.component';
import { ShowhellobuttonComponent } from '@app/showhellobutton/showhellobutton.component';
import { DisplaynameComponent } from '@app/displayname/displayname.component';
import { CounterComponent } from '@app/counter/counter.component';
import { SimpleformComponent } from '@app/simpleform/simpleform.component';

export const routes: Routes = [
    {
        title: 'Component #1: Display Hello World',
        component: DisplayhelloworldComponent,
        path: 'hello-world',
    },
    {
        title: 'Component #2: Show Hello Button',
        component: ShowhellobuttonComponent,
        path: 'hello-button',
    },
    {
        title: "Component #3: Display User's name",
        component: DisplaynameComponent,
        path: 'display-name',
    },
    {
        title: 'Component #4: Counter',
        component: CounterComponent,
        path: 'counter',
    },
    {
        title: 'Component #5: Simple Form',
        component: SimpleformComponent,
        path: 'simple-form',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
