import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'inventory-app-price-display',
  templateUrl: './price-display.component.html',
  styleUrls: ['./price-display.component.scss']
})
export class PriceDisplayComponent implements OnInit {
/**
 * @PriceDisplay: A component to show the price of a
 * Product
 */
  @Input() price:number;

  constructor() { }

  ngOnInit() {
  }

}
