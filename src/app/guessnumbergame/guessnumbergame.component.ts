import { Component, ViewChild, type ElementRef } from '@angular/core';

@Component({
	selector: 'app-guessnumbergame',
	standalone: true,
	imports: [],
	templateUrl: './guessnumbergame.component.html',
})
export class GuessnumbergameComponent {
	numberToBeGuess = Math.round(Number(Math.random() * 20));
	@ViewChild('guess') guess!: ElementRef;
	result = '---';
	makeAGuess(): void {
		const guessNumber = Number(this.guess.nativeElement.value);
		if (guessNumber === this.numberToBeGuess) {
			this.result = `The guess: ${guessNumber} is correct!`;
		}
	}
}
