import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'inventory-app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.scss']
})
export class ProductImageComponent implements OnInit {
  /**
   * ProductImageComponent displays all images
   * product.imageUrl - is url of image location
   * @property product - all product array
   *                   
   */
  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'ui small image';
  constructor() { }

  ngOnInit() {
  }

}
