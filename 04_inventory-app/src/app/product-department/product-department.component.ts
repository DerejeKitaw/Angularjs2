import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'inventory-app-product-department',
  templateUrl: './product-department.component.html',
  styleUrls: ['./product-department.component.scss']
})
export class ProductDepartmentComponent implements OnInit {
/**
   * ProductDepartmentComponent displays all department
   * product.department - is an array of departments
   * @property product - all product array
   *                   
   */
@Input() product: Product;
  constructor() { }

  ngOnInit() {
  }

}
