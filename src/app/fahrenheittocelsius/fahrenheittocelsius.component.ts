import { Component, ViewChild, type ElementRef } from '@angular/core';

@Component({
    selector: 'app-fahrenheittocelsius',
    standalone: true,
    imports: [],
    templateUrl: './fahrenheittocelsius.component.html',
})
export class FahrenheittocelsiusComponent {
    @ViewChild('fahrenheit') fahrenheit!: ElementRef;
    celsius = 0;
    convertToCelsius(): void {
        this.celsius =
            (Number(this.fahrenheit.nativeElement.value) - 32) * 0.55;
    }
}
