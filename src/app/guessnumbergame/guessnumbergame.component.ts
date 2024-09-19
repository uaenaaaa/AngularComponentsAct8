import { Component, ViewChild, type ElementRef } from '@angular/core';

@Component({
    selector: 'app-guessnumbergame',
    standalone: true,
    imports: [],
    templateUrl: './guessnumbergame.component.html',
    styleUrl: './guessnumbergame.component.css',
})
export class GuessnumbergameComponent {
    numberToBeGuess = Math.round(Number(Math.random() * 20));
    @ViewChild('guess') guess!: ElementRef;
    result = '---';
    makeAGuess(): void {
        const guessNumber = Number(this.guess.nativeElement.value);
        console.log(this.numberToBeGuess);
        if (guessNumber === this.numberToBeGuess) {
            this.result = `The guess: ${guessNumber} is correct!`;
        }
    }
}
