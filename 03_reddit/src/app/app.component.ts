import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'reddit-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reddit';
  articles:Article[]; //<-- component property 
  constructor() {
    this.articles=[
       new Article('Angular 4','http://angular.io',2),
       new Article('Fullstack','http://dkitaw.com',3),
       new Article('Angular Homepage','http://angular.io',1)
    ];

   }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value,link.value,0));
    title.value='';
    link.value='';
    return false;
  }
}
