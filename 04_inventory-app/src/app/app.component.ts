import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'inventory-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   /**
   * AppComponent 
   *  - displays all products by assing one product at a time to ProductRowComponent
   *  - contains
   *         ProductRowComponent      - to display product
   *                      
   *                      
   * @property products    - all products defined in the constructor
   *                   
   */
  products : Product[];

  constructor(){
    this.products=[
      new Product(
        'MYSHOES',
        'Black Running Shoes',
        '/assets/images/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        109.99),
        new Product(
          'NEATOJACKET',
          'Blue Jacket',
          '/assets/images/products/blue-jacket.jpg',
          ['Women', 'Apparel', 'Jackets & Vests'],
          238.99),
        new Product(
          'NICEHAT',
          'A Nice Black Hat',
          '/assets/images/products/black-hat.jpg',
          ['Men', 'Accessories', 'Hats'],
          29.99)
    ];
  }
}
