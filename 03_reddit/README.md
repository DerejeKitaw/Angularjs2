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