import { Component, ViewChild, type ElementRef } from '@angular/core';

@Component({
  selector: 'app-textlength',
  standalone: true,
  imports: [],
  templateUrl: './textlength.component.html',
})
export class TextlengthComponent {
    @ViewChild('inputText') inputText!: ElementRef
    length = 0

    countLength(): void {
        this.length = Number(String(this.inputText.nativeElement.value).length)
    }
}
