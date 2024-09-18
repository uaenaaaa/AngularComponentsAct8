import { Component, ViewChild, type ElementRef } from '@angular/core';

@Component({
    selector: 'app-usergreeting',
    standalone: true,
    imports: [],
    templateUrl: './usergreeting.component.html',
})
export class UsergreetingComponent {
    @ViewChild('name') name!: ElementRef;
    greeting = '';

    greetUser(): void {
        this.greeting = `Good day, ${this.name.nativeElement.value}`;
    }
}
