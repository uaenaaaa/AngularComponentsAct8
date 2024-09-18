import { Component, ViewChild, type ElementRef } from '@angular/core';
import { NgModel } from '@angular/forms';
@Component({
    selector: 'app-displayname',
    standalone: true,
    imports: [],
    templateUrl: './displayname.component.html',
})
export class DisplaynameComponent {
    @ViewChild('nameField') nameField!: ElementRef;
    name = '';
    displayName(): void {
        this.name = this.nameField.nativeElement.value;
    }
}
