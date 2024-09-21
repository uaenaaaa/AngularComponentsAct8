import { Component, ViewChild, type ElementRef } from '@angular/core';

@Component({
	selector: 'app-customgreeting',
	standalone: true,
	imports: [],
	templateUrl: './customgreeting.component.html',
})
export class CustomgreetingComponent {
	@ViewChild('greeting') greeting!: ElementRef;
	@ViewChild('name') name!: ElementRef;

	greetings = '';

	greetMe(): void {
		this.greetings = `${this.greeting.nativeElement.value}, ${this.name.nativeElement.value}`;
	}
}
