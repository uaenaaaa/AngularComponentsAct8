import { Component, ViewChild, type ElementRef } from '@angular/core';

@Component({
    selector: 'app-wordshuffler',
    standalone: true,
    imports: [],
    templateUrl: './wordshuffler.component.html',
    styleUrl: './wordshuffler.component.css',
})
export class WordshufflerComponent {
    @ViewChild('word') word!: ElementRef;
    result = '';

    shuffleLetters() {
        const word = String(this.word.nativeElement.value);
        let array = word.split('');
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        this.result = array.join('');
    }

    private shuffle(word: string): string {
        let array = word.split('');
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array.join('');
    }
}
