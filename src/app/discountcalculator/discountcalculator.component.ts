import { Component, ViewChild, type ElementRef } from '@angular/core';

@Component({
	selector: 'app-discountcalculator',
	standalone: true,
	imports: [],
	templateUrl: './discountcalculator.component.html',
})
export class DiscountcalculatorComponent {
	@ViewChild('price') price!: ElementRef;
	@ViewChild('discount') discount!: ElementRef;
	result = '';

	calculateDiscount(): void {
		const priceValue = Number(this.price.nativeElement.value);
		const discountValue = Number(this.discount.nativeElement.value);
		this.result = `Discounted price: $${
			priceValue - (priceValue * discountValue) / 100
		}`;
	}
}
