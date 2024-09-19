import { Component, ViewChild, type ElementRef } from '@angular/core';

@Component({
    selector: 'app-charactercounter',
    standalone: true,
    imports: [],
    templateUrl: './charactercounter.component.html',
})
export class CharactercounterComponent {
    @ViewChild('text') text!: ElementRef;
    count = 0;
    countTheCharacter(): void {
        this.count = Number(String(this.text.nativeElement.value).length);
    }
}
