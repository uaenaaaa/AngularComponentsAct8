import { Component, ViewChild, type ElementRef } from '@angular/core';

@Component({
	selector: 'app-monthnamefinder',
	standalone: true,
	imports: [],
	templateUrl: './monthnamefinder.component.html',
})
export class MonthnamefinderComponent {
	@ViewChild('monthNum') monthNum!: ElementRef;
	result = '';

	getMonthName(): void {
		const months = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		];
		this.result = months[Number(this.monthNum.nativeElement.value) - 1];
	}
}
