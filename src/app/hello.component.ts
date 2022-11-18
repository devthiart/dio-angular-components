import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  // template: `<h1>Hello {{name}}!</h1>`,
  // styles: [`h1 { font-family: Lato; }`]
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent {
  @Input() name: string;
}
