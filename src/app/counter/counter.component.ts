import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    standalone: true,
    imports: [],
    templateUrl: './counter.component.html',
})
export class CounterComponent {
    count = 0;

    increment(): void {
        this.count += 1;
    }
}
