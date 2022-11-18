import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry-data',
  templateUrl: './entry-data.component.html',
  styleUrls: ['./entry-data.component.css'],
})
export class EntryDataComponent {
  placeholder: string = 'Value placeholder';
  placepass: string = 'Value placepass';
  color: string = 'red';
}
