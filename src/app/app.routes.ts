import { RouterModule, Routes } from '@angular/router';
import { DisplayhelloworldComponent } from './displayhelloworld/displayhelloworld.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        title: 'Display Hello World',
        component: DisplayhelloworldComponent,
        path: 'hello-world',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
