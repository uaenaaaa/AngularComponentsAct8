import { Component, ViewChild, type ElementRef } from '@angular/core';

@Component({
    selector: 'app-showusername',
    standalone: true,
    imports: [],
    templateUrl: './showusername.component.html',
})
export class ShowusernameComponent {
    @ViewChild('usernameField') usernameField!: ElementRef;
    username = '';
    showMyUsername(): void {
        this.username = this.usernameField.nativeElement.value;
    }
}
