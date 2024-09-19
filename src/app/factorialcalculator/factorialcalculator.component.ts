import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-factorialcalculator',
    standalone: true,
    imports: [],
    templateUrl: './factorialcalculator.component.html',
})
export class FactorialcalculatorComponent {
    @ViewChild('numberToBeFactorial') numberToBeFactorial!: ElementRef;
    result = 0;
    num = 0;

    startFactorial(): void {
        this.num = Number(this.numberToBeFactorial.nativeElement.value);
        this.result = this.factorial(this.num);
    }

    factorial(n: number): number {
        return n > 1 ? n * this.factorial(n - 1) : 1;
    }
}
