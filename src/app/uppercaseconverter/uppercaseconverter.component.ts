import { Component, ViewChild, type ElementRef } from '@angular/core';

@Component({
	selector: 'app-uppercaseconverter',
	standalone: true,
	imports: [],
	templateUrl: './uppercaseconverter.component.html',
})
export class UppercaseconverterComponent {
	@ViewChild('text') text!: ElementRef;
	result = '';

	convert(): void {
		this.result = String(this.text.nativeElement.value).toUpperCase();
	}
}
