import { Component, ViewChild, type ElementRef } from '@angular/core';

@Component({
	selector: 'app-urlsluggenerator',
	standalone: true,
	imports: [],
	templateUrl: './urlsluggenerator.component.html',
})
export class UrlsluggeneratorComponent {
	@ViewChild('url') url!: ElementRef;
	result = '';

	transformToSlug(): void {
		this.result = String(this.url.nativeElement.value)
			.toLowerCase()
			.split(' ')
			.join('-');
	}
}
