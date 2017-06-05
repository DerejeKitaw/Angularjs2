import { Component, OnInit ,ViewChild} from '@angular/core';
import { ChildComponent } from './child/child.component';
@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
@ViewChild (ChildComponent) childComponent: ChildComponent
  constructor() { }

  ngOnInit() {
  }

  ClearChildcounter(){
    this.childComponent.clear();
  }
}
