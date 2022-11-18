import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class Button {
  @Input() label: string = '';
  buttonText: string = 'ACCESS';
  buttonNumber: number = 1;
  buttonTexts: string[] = ['SELL', 'BUY'];
  buttonObject = {
    label: 'Add to Cart',
  };

  getAlert(num: number) {
    alert(num);
  }
}
