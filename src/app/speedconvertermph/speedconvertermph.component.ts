import { Component, ViewChild, type ElementRef } from '@angular/core';

@Component({
    selector: 'app-speedconvertermph',
    standalone: true,
    imports: [],
    templateUrl: './speedconvertermph.component.html',
})
export class SpeedconvertermphComponent {
    @ViewChild('speed') speed!: ElementRef;
    result = '';

    convertSpeed(): void {
        const speedValue = Number(this.speed.nativeElement.value);
        this.result = `Speed in mph: ${speedValue / 1.60934}`;
    }
}
