import { Component } from '@angular/core';

@Component({
    selector: 'app-showhellobutton',
    standalone: true,
    imports: [],
    templateUrl: './showhellobutton.component.html',
})
export class ShowhellobuttonComponent {
    x = '';
    showHello(): void {
        this.x = 'Hello World';
    }
}
