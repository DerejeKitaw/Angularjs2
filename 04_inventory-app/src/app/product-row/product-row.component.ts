import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'inventory-app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.scss']
})
export class ProductRowComponent implements OnInit {
  
  /**
   * ProductRowComponent 
   *  - displays one product at a time
   *  - contains
   *         PriceDisplayComponent      - to display price
   *         ProductDepartmentComponent - to display department
   *         ProductImageComponent      - to display image
   *                      
   *                      
   * @property product    - one product come from hosting component(AppComponent)
   *                   
   */
  @Input() product:Product;
  @HostBinding('attr.class') cssClass = 'item';
  constructor() { }

  ngOnInit() {
  }

}
