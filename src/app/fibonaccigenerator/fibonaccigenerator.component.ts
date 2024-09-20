import { Component, ViewChild, type ElementRef } from '@angular/core';

@Component({
	selector: 'app-fibonaccigenerator',
	standalone: true,
	imports: [],
	templateUrl: './fibonaccigenerator.component.html',
})
export class FibonaccigeneratorComponent {
	@ViewChild('number') number!: ElementRef;
	result = 0;

	calculatefib(): void {
		this.result = this.fib(Number(this.number.nativeElement.value));
	}

	fib(n: number): number {
		return n <= 1 ? n : this.fib(n - 1) + this.fib(n - 2);
	}
}
