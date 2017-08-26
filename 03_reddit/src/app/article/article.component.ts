import { Component, OnInit, HostBinding } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'reddit-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  // Add class="row"
  @HostBinding('attr.class') cssClass ='row';
  article:Article;

  constructor() {
    this.article = new Article(
      'Angular 4',
      'http://angular.io',
      10

    );

   }
voteUp(){
  this.article.votes+=1;
  return false; // to avoid relode of the page
}

voteDown(){
  this.article.votes -= 1;
  return false;
}
  ngOnInit() {
  }

}
