import { Component, ViewChild, type ElementRef } from '@angular/core';

@Component({
	selector: 'app-speedconverter',
	standalone: true,
	imports: [],
	templateUrl: './speedconverter.component.html',
})
export class SpeedconverterComponent {
	@ViewChild('speed') speed!: ElementRef;
	result = '';

	convertSpeed(): void {
		const speedValue = Number(this.speed.nativeElement.value);
		this.result = `Speed in km/h: ${speedValue * 1.60934}`;
	}
}
