import { Component, ViewChild, type ElementRef } from '@angular/core';

@Component({
	selector: 'app-userregistrationformextended',
	standalone: true,
	imports: [],
	templateUrl: './userregistrationformextended.component.html',
})
export class UserregistrationformextendedComponent {
	@ViewChild('email') email!: ElementRef;
	@ViewChild('name') name!: ElementRef;
	message = '';

	logSuccess(): void {
		this.message = `Your account with an email ${this.email.nativeElement.value} and name ${this.name.nativeElement.value} successfully registered.`;
	}
}
