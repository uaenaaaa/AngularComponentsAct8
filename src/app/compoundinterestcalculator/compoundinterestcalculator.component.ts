import { Component, ViewChild, type ElementRef } from '@angular/core';

@Component({
	selector: 'app-compoundinterestcalculator',
	standalone: true,
	imports: [],
	templateUrl: './compoundinterestcalculator.component.html',
})
export class CompoundinterestcalculatorComponent {
	@ViewChild('principal') principal!: ElementRef;
	@ViewChild('rate') rate!: ElementRef;
	@ViewChild('years') years!: ElementRef;
	@ViewChild('timesCompounded') timesCompounded!: ElementRef;
	ci: number = 0;

	calculate() {
		const principalValue = Number(this.principal.nativeElement.value);
		const rateValue = Number(this.rate.nativeElement.value) / 100;
		const years = Number(this.years.nativeElement.value);
		const timesCompoundedValue = Number(
			this.timesCompounded.nativeElement.value,
		);

		const futureValue =
			principalValue *
			Math.pow(
				1 + rateValue / timesCompoundedValue,
				timesCompoundedValue * years,
			);

		this.ci = Number((futureValue - principalValue).toFixed(2));
	}
}
