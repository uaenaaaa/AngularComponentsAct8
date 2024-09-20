import { Component, ViewChild, type ElementRef } from '@angular/core';

@Component({
	selector: 'app-interestcalculator',
	standalone: true,
	imports: [],
	templateUrl: './interestcalculator.component.html',
})
export class InterestcalculatorComponent {
	@ViewChild('principal') principal!: ElementRef;
	@ViewChild('rate') rate!: ElementRef;
	@ViewChild('years') years!: ElementRef;
	si = 0;

	calculate(): void {
		this.si =
			Number(this.principal.nativeElement.value) *
			(Number(this.rate.nativeElement.value) / 100) *
			Number(this.years.nativeElement.value);
	}
}
