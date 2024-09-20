import { Component, ViewChild, type ElementRef } from '@angular/core';

@Component({
	selector: 'app-uppercasegreeting',
	standalone: true,
	imports: [],
	templateUrl: './uppercasegreeting.component.html',
	styleUrl: './uppercasegreeting.component.css',
})
export class UppercasegreetingComponent {
	@ViewChild('userName') userName!: ElementRef;
	result = '';
	transform(): void {
		this.result = String(this.userName.nativeElement.value).toUpperCase();
	}
}
