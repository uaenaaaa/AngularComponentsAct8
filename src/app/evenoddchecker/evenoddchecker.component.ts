import { Component, ViewChild, type ElementRef } from '@angular/core';

@Component({
    selector: 'app-evenoddchecker',
    standalone: true,
    imports: [],
    templateUrl: './evenoddchecker.component.html',
})
export class EvenoddcheckerComponent {
    @ViewChild('inputNumber') inputNumber!: ElementRef;
    result = '';
    evenOrOdd(): void {
        this.result =
            Number(this.inputNumber.nativeElement.value) % 2 !== 0
                ? (this.result = 'odd')
                : (this.result = 'even');
    }
}
