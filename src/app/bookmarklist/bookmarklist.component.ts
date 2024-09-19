import { Component, ViewChild, type ElementRef } from '@angular/core';

@Component({
    selector: 'app-bookmarklist',
    standalone: true,
    imports: [],
    templateUrl: './bookmarklist.component.html',
})
export class BookmarklistComponent {
    @ViewChild('linkInput') linkInput!: ElementRef;
    linksArray: string[] = [];
    addLink(): void {
        this.linksArray.push(
            `https://www.${this.linkInput.nativeElement.value}`
        );
        this.linkInput.nativeElement.value = '';
    }
}
