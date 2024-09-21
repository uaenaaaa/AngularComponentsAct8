import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
	selector: 'app-currencyformatter',
	standalone: true,
	imports: [],
	templateUrl: './currencyformatter.component.html',
})
export class CurrencyformatterComponent {
	@ViewChild('currency') currency!: ElementRef;
	@ViewChild('conversionCurr') conversionCurr!: ElementRef;
	result = '';
	convert(): void {
		if (this.conversionCurr.nativeElement.value === 'usd') {
			this.result = `$ ${this.currency.nativeElement.value}`;
		} else if (this.conversionCurr.nativeElement.value === 'php') {
			this.result = `₱ ${this.currency.nativeElement.value}`;
		} else if (this.conversionCurr.nativeElement.value === 'euro') {
			this.result = `€ ${this.currency.nativeElement.value}`;
		}
	}
}
