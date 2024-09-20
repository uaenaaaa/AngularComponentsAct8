import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
	selector: 'app-oddsumcalculator',
	standalone: true,
	imports: [],
	templateUrl: './oddsumcalculator.component.html',
	styleUrls: ['./oddsumcalculator.component.css'],
})
export class OddsumcalculatorComponent {
	@ViewChild('number') number!: ElementRef;
	result = 0;

	calculate(): void {
		const inputNumber = Number(this.number.nativeElement.value);
		this.result = 0;
		for (let i = 1; i <= inputNumber; i += 2) {
			this.result += i;
		}
	}
}
