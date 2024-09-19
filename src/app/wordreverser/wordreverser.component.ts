import { Component, ViewChild, type ElementRef } from '@angular/core';
import { concat } from 'rxjs';

@Component({
    selector: 'app-wordreverser',
    standalone: true,
    imports: [],
    templateUrl: './wordreverser.component.html',
})
export class WordreverserComponent {
    @ViewChild('inputWord') inputWord!: ElementRef;
    result = '';

    reverseTheWord(): void {
        this.result = this.reverser(this.inputWord.nativeElement.value);
    }

    reverser(str: string): string {
        let reversedWord = '';
        for (let i = str.length - 1; i >= 0; i--) {
            reversedWord += str[i];
        }
        return reversedWord;
    }
}
