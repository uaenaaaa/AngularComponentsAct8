import { Component, ViewChild, type ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-multiplicationtable',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './multiplicationtable.component.html',
})
export class MultiplicationtableComponent {
    @ViewChild('numberChoice') numberChoice!: ElementRef;
    tableArray: string[] = [];

    showMultiplicationTable(): void {
        this.tableArray.length = 0;
        for (let i = 1; i <= 10; i++) {
            this.tableArray.push(
                `${this.numberChoice.nativeElement.value} x ${i} = ${
                    Number(this.numberChoice.nativeElement.value) * i
                }`
            );
        }
    }
}
