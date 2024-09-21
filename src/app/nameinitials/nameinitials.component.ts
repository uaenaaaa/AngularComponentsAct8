import { Component, ViewChild, type ElementRef } from '@angular/core';

@Component({
	selector: 'app-nameinitials',
	standalone: true,
	imports: [],
	templateUrl: './nameinitials.component.html',
})
export class NameinitialsComponent {
	@ViewChild('name') name!: ElementRef;
	result = '';

	getInitials(): void {
		this.result = '';
		const fullNameArray = String(this.name.nativeElement.value).split(' ');

		for (let i = 0; i < fullNameArray.length; i++) {
			this.result += String(fullNameArray[i]).charAt(0);
		}
	}
}
