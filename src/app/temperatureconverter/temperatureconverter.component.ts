import { Component, ViewChild, type ElementRef } from '@angular/core';

@Component({
    selector: 'app-temperatureconverter',
    standalone: true,
    imports: [],
    templateUrl: './temperatureconverter.component.html',
})
export class TemperatureconverterComponent {
    @ViewChild('temperature') temperature!: ElementRef;
    @ViewChild('tempUnit') tempUnit!: ElementRef;
    result = '';

    convert(): void {
        const tempInput = Number(this.temperature.nativeElement.value);
        this.result =
            this.tempUnit.nativeElement.value === 'celsius'
                ? `${tempInput} F is ${(tempInput - 32) * 0.555} on C`
                : `${tempInput} C is ${1.8 * tempInput + 32} on F`;
    }
}
