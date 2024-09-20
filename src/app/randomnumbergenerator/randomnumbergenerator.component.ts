import { Component, ViewChild, type ElementRef } from '@angular/core';

@Component({
    selector: 'app-randomnumbergenerator',
    standalone: true,
    imports: [],
    templateUrl: './randomnumbergenerator.component.html',
})
export class RandomnumbergeneratorComponent {
    @ViewChild('upperBound') upperBound!: ElementRef;
    @ViewChild('lowerBound') lowerBound!: ElementRef;
    generated = 0;
    generate(): void {
        const min = Number(this.lowerBound.nativeElement.value);
        const max = Number(this.upperBound.nativeElement.value);
        this.generated = Math.round(Math.random() * (max - min) + min);
    }
}
