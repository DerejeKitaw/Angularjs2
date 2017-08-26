import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'reddit-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  // Add class="row"
  @HostBinding('attr.class') cssClass ='row';
  
  votes: number;
  title:string;
  link:string;

  constructor() {
    this.title='Angular 4';
    this.link='http://dkitaw.com';
    this.votes=10;

   }
voteUp(){
  this.votes+=1;
  return false; // to avoid relode of the page
}

voteDown(){
  this.votes -= 1;
  return false;
}
  ngOnInit() {
  }

}
