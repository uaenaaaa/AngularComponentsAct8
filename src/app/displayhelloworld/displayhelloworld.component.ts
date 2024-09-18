import { Component } from '@angular/core';

@Component({
    selector: 'app-displayhelloworld',
    standalone: true,
    imports: [],
    templateUrl: './displayhelloworld.component.html',
})
export class DisplayhelloworldComponent {
    x = 'Hello World';
}
