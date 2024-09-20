import { Component, ViewChild, type ElementRef } from '@angular/core';

@Component({
    selector: 'app-wordcounter',
    standalone: true,
    imports: [],
    templateUrl: './wordcounter.component.html',
})
export class WordcounterComponent {
    @ViewChild('wordsInput') wordsInput!: ElementRef;
    result = 0;

    countWords(): void {
        this.result = String(this.wordsInput.nativeElement.value).split(
            ' '
        ).length;
    }
}
