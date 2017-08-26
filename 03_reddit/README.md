# Reddit
```bash
# create new project with angular cli.

ng new reddit --style=scss --prefix=reddit
```

```bash
# Install Semantic UI
    Creater file /app/vendor/semantic.min.css

# import semantic in app
In styles.scss add 

@import './app/vendor/semantic.min.css'; 

```

```bash
# insert form in app component

<form  class="ui large form segment">
    <h3 class="ui header">Add a Link</h3>
    <div class="field">
        <label for="title">Title</label>
        <input name="title">
    </div>
    <div class="field">
        <label for="link">Link</label>
        <input name="link">
    </div>
</form>

```
```bash
# Change form background colour of the form

form.ui.segment.form{
    background-color: #F1F9FF;
}

```
```bash
# Change top-bottom and right-left margin

form.ui.segment.form {
    margin: 2em 2.5em;
}

```

```bash
# Add submit button

    <button (click)="addArticle()" class="ui positive right floated button">Submit link</button>

```
```bash
# define addArticle in AppComponent

addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    return false;
  }
```


```bash
# Add update addArticle

    <button (click)="addArticle(newtitle, newlink)" class="ui positive right floated button">Submit link</button>

```

```bash
# pass input field values to addArticle by assigning input values to a loacal variable by '#'

## NOTE: #newtitle and #newlink are not values of input field. They are HTMLInputElement objects. To get values of this object use .value

<form  class="ui large form segment">
    <h3 class="ui header">Add a Link</h3>
    <div class="field">
        <label for="title">Title</label>
        <input name="title" #newtitle>
    </div>
    <div class="field">
        <label for="link">Link</label>
        <input name="link" #newlink>
    </div>
     <button (click)="addArticle(newtitle, newlink)" class="ui positive right floated button">Submit link</button>
</form>

```

## Displying form value

```bash
# Create ArticleComponent

    ## use -- dry to see cli output. 
ng g c article --dry

``` 
```bash
# add ArticleComonent to App

<form  class="ui large form segment">
        <h3 class="ui header">Add a Link</h3>
        <div class="field">
            <label for="title">Title</label>
            <input name="title" #newtitle>
        </div>
        <div class="field">
            <label for="link">Link</label>
            <input name="link" #newlink>
        </div>
         <button (click)="addArticle(newtitle, newlink)" class="ui positive right floated button">Submit link</button>
    </form>

    <div class="ui grid posts">
        <reddit-article></reddit-article>
    </div>
```
```bash
# update article.component.html

<div class="four wide column center aligned votes">
    <div class="ui statistic">
      <div class="value">
        {{ votes }}
      </div>
      <div class="label">
        Points
      </div>
    </div>
  </div>
  <div class="twelve wide column">
    <a class="ui large header" href="{{ link }}">
      {{ title }}
    </a>
    
    <ul class="ui big horizontal list voters">
      <li class="item">
        <a href (click)="voteUp()">
          <i class="arrow up icon"></i>
          upvote 
        </a>
      </li>
      <li class="item"> 
        <a href (click)="voteDown()">
          <i class="arrow down icon"></i>
          downvote
        </a>
      </li>
    </ul>
  </div>
```

## Rendering multiple rows of articles

```bash
# Create an article class

ng g class article/article.model --dry

```

```bash
# update articleModel

export class Article {
    title: string;
    link: string;
    votes:number;

    constructor (title:string, link: string, votes?:number){
        this.title=title;
        this.link=link;
        this.votes=votes || 0; //default 0 and optional
    }
}

```

```bash
# The reason we have a voteUp() and a voteDown() on both classes is because each function does a slightly different thing. 

# The idea is that the voteUp() on the ArticleComponent relates to the component view, whereas the Article model voteUp() defines what mutations happenin the model. 
```

```bash
# update article.component.html

{{ article.title }}
{{ article.title }}

```

```bash
# move article data from article component to app component

# app.component.ts

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
    return false;
  }
}

```

```bash
# Display link in the article component Eg. http://angular.io ->
"angular.io"
good place to put this is in the article.module.ts

  domain(): string {
    try {
      // e.g. http://angular.io/path/to/bar
      // link =http://angular.io
      // link.split('//')[0]=http:
      // domain=link.split('//')[1]=angular.io/path/to/bar
        // domain.split('/')[0]=angular.io
        // domain.split('/')[1]=path
        // domain.split('/')[2]=bar
      const domainAndPath: string = this.link.split('//')[1];
      // e.g. foo.com/path/to/bar
      return domainAndPath.split('/')[0];
    } catch (err) {
      return null;
    }
  }

```

```bash
# use it in the article.component.html

 <div>({{article.domain()}})</div>

 will result in (angular.io) in the output

```
## Add article from the form
```bash
# create add article function in app component

addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value,link.value,0));
    title.value='';
    link.value='';
    return false;
  }

```