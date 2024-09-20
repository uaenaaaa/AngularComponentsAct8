import { Component, ViewChild, type ElementRef } from '@angular/core';

@Component({
    selector: 'app-multiplicationchecker',
    standalone: true,
    imports: [],
    templateUrl: './multiplicationchecker.component.html',
    styleUrl: './multiplicationchecker.component.css',
})
export class MultiplicationcheckerComponent {
    @ViewChild('numOne') numOne!: ElementRef;
    @ViewChild('numTwo') numTwo!: ElementRef;
    result = false;

    check(): void {
        this.result =
            Number(this.numOne.nativeElement.value) %
                Number(this.numTwo.nativeElement.value) ===
            0
                ? true
                : false;
    }
}
