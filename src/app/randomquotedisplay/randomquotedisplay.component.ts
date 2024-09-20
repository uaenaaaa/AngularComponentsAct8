import { Component } from '@angular/core';

@Component({
	selector: 'app-randomquotedisplay',
	standalone: true,
	imports: [],
	templateUrl: './randomquotedisplay.component.html',
})
export class RandomquotedisplayComponent {
	quotesArray = [
		'The best way to predict the future is to invent it.',
		'Life is 10% what happens to us and 90% how we react to it.',
		'The only way to do great work is to love what you do.',
		'Success is not the key to happiness. Happiness is the key to success.',
		"Your time is limited, don't waste it living someone else's life.",
		'The purpose of our lives is to be happy.',
		'Get busy living or get busy dying.',
		'You have within you right now, everything you need to deal with whatever the world can throw at you.',
		"Believe you can and you're halfway there.",
		'The only limit to our realization of tomorrow is our doubts of today.',
	];
	quote = '';

	generateRandomQuote(): void {
		this.quote =
			this.quotesArray[
				Math.floor(Math.random() * this.quotesArray.length)
			];
	}
}
