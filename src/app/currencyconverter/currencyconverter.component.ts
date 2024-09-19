import { Component, ViewChild, type ElementRef } from '@angular/core';

@Component({
    selector: 'app-currencyconverter',
    standalone: true,
    imports: [],
    templateUrl: './currencyconverter.component.html',
})
export class CurrencyconverterComponent {
    @ViewChild('php') php!: ElementRef;
    @ViewChild('currencySelector') currencySelector!: ElementRef;

    usd = 55.88;
    euro = 61.93;
    gbp = 73.6;
    cad = 40.97;
    krw = 0.441;
    value = 0;

    convert(): void {
        if (!this.currencySelector.nativeElement.value) {
            this.value = 0;
        } else if (this.currencySelector.nativeElement.value === 'usd') {
            this.value = Number(this.php.nativeElement.value) / this.usd;
        } else if (this.currencySelector.nativeElement.value === 'krw') {
            this.value = Number(this.php.nativeElement.value) / this.krw;
        } else if (this.currencySelector.nativeElement.value === 'gbp') {
            this.value = Number(this.php.nativeElement.value) / this.gbp;
        } else if (this.currencySelector.nativeElement.value === 'eur') {
            this.value = Number(this.php.nativeElement.value) / this.euro;
        } else if (this.currencySelector.nativeElement.value === 'cad') {
            this.value = Number(this.php.nativeElement.value) / this.cad;
        }
    }
}
