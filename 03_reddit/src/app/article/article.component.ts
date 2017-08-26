import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'reddit-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  // Add class="row"
  @HostBinding('attr.class') cssClass ='row';
  @Input() article: Article;   


  constructor() {
    // article is populated by the Input now,
    // so we don't need anything here
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
