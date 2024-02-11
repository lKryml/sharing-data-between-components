import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-beverages',
  templateUrl: './beverages.component.html',
  styleUrls: ['./beverages.component.css'],
})
export class BeveragesComponent {
  @Input() beverage = 'tea';
  @Output() newBeverageEvent = new EventEmitter<string>();

  addNewBeverage(value: string) {
    this.newBeverageEvent.emit(value);
  }
}
