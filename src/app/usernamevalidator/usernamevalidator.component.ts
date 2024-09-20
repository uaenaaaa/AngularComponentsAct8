import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
	selector: 'app-usernamevalidator',
	templateUrl: './usernamevalidator.component.html',
	styleUrls: ['./usernamevalidator.component.css'],
})
export class UsernamevalidatorComponent {
	@ViewChild('username') username!: ElementRef;
	result = '';

	validate(): void {
		const usernameValue = this.username.nativeElement.value;
		const regex = /^[\w\p{P}\p{S}]{4}$/u;
		this.result = regex.test(usernameValue) ? 'allowed' : 'denied';
	}
}
