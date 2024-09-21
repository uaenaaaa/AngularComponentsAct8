import { Component, ViewChild, type ElementRef } from '@angular/core';

@Component({
	selector: 'app-agegroupclassifier',
	standalone: true,
	imports: [],
	templateUrl: './agegroupclassifier.component.html',
})
export class AgegroupclassifierComponent {
	@ViewChild('inputAge') inputAge!: ElementRef;
	result = '';

	classifyAge(): void {
		const age = this.inputAge.nativeElement.value;
		if (age < 0) {
			this.result = 'Invalid age';
		} else if (age <= 12) {
			this.result = 'Child';
		} else if (age <= 19) {
			this.result = 'Teen';
		} else if (age <= 59) {
			this.result = 'Adult';
		} else {
			this.result = 'Senior';
		}
	}
}
