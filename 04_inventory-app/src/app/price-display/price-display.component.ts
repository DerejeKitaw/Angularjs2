import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'inventory-app-price-display',
  templateUrl: './price-display.component.html',
  styleUrls: ['./price-display.component.scss']
})
export class PriceDisplayComponent implements OnInit {
 /**
   * @property price - price come from hosting component
   *                   [price]="value of price to be desplayed in this component"
   */
  @Input() price:number;

  constructor() { }

  ngOnInit() {
  }

}
