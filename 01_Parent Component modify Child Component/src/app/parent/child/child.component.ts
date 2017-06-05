import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  counter: number=0;

  constructor() { }

  ngOnInit() {
  }

  count(event: any){
    event.preventDefault();
    this.counter++;

  }
  clear(){
    this.counter=0;
  }
}
