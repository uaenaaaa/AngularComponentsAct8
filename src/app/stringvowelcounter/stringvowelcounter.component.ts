import { Component, ViewChild, type ElementRef } from '@angular/core';

@Component({
	selector: 'app-stringvowelcounter',
	standalone: true,
	imports: [],
	templateUrl: './stringvowelcounter.component.html',
})
export class StringvowelcounterComponent {
	vowels = ['a', 'e', 'i', 'o', 'u'];
	result = 0;

	@ViewChild('inputWord') inputWord!: ElementRef;

	countVowels(): void {
		const word = String(this.inputWord.nativeElement.value);
		this.result = 0;
		for (let i = 0; i < word.length; i++) {
			if (this.vowels.includes(word[i])) {
				this.result += 1;
			}
		}
	}
}
