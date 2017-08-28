import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'inventory-app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  
  /**
   * ProductListComponent - displays all products in a row using ProductRowComponent
   *                      - contain ProductRowComponent
   *                      - pass single product to ProductRowComponent one by one using "ngFor"
   *                      
   * @Input productList - array of all products  "Products[]" passed to ProductListComponent
   *                   
   */

  @Input() productList: Product[];
  private currentProduct: Product;
  constructor() { }

  ngOnInit() {
  }

  clicked(product: Product){
    this.currentProduct = product;
    console.log('clicked'+ product.name);
  }
}
