import { Component, ViewChild, type ElementRef } from '@angular/core';

@Component({
	selector: 'app-bmisolver',
	standalone: true,
	imports: [],
	templateUrl: './bmisolver.component.html',
})
export class BmisolverComponent {
	@ViewChild('height') height!: ElementRef;
	@ViewChild('weight') weight!: ElementRef;
	result = 0;
	calculate(): void {
		this.result =
			Number(this.weight.nativeElement.value) /
			Math.pow(Number(this.height.nativeElement.value), 2);
	}
}
