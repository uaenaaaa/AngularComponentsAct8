import { Component, ViewChild, type ElementRef } from '@angular/core';

@Component({
	selector: 'app-divisiblechecker',
	standalone: true,
	imports: [],
	templateUrl: './divisiblechecker.component.html',
})
export class DivisiblecheckerComponent {
	@ViewChild('numOne') numOne!: ElementRef;
	@ViewChild('numTwo') numTwo!: ElementRef;
	result = '';
	checkDivisibility(): void {
		const numOneValue = Number(this.numOne.nativeElement.value);
		const numTwoValue = Number(this.numTwo.nativeElement.value);
		this.result =
			numOneValue % numTwoValue === 0
				? `${numOneValue} is divisible by ${numTwoValue}`
				: `${numOneValue} is not divisible by ${numTwoValue}`;
	}
}
