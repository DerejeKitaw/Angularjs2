### How parent component change the property of child component.

`Parent component will use `@ViewChild` to call functions in child component.`


@ViewChild(myPredicate) myChildComponent;  | Binds the first result of the component view query (myPredicate) to a property (myChildComponent) of the class.
---       | ---
 @ViewChild   | Not available for directives.




From parent component 
```bash
# parent.component.html

<button type="button" class="btn btn-default" (click)="ClearChildcounter()" >ClearChildcounter</button>
```

When a button in the parent componet clicked , triger a function in the child component. Or how can function in parent component access a function in child component?

```bash
# parent.component.ts

ClearChildcounter(){
    this.childComponent.clear();
  }
```
```bash
# child.component.ts

clear(){
    this.counter=0;
  }
```

 ChildComponent need to be `bind` to parent componet using `@ViewChild()` To make function in parent component `ClearChildcounter()` run functions in child component `clear()`.

```bash
# parent.component.ts
import { ChildComponent } from './child/child.component';

@ViewChild (ChildComponent) childComponent: ChildComponent
```
References:
[learnangular2.com](http://learnangular2.com/viewChild/)

```bash
# parent.component.ts
import { Component, ViewChild } from '@angular/core';
import { UserProfile } from '../user-profile';

@Component({
  template: '<user-profile (click)="update()"></user-profile>',
})
export class MasterPage {
  // ViewChild takes a class type or a reference name string.
  // Here we are using the type
  @ViewChild(UserProfile) userProfile: UserProfile

  constructor() { }

  ngAfterViewInit() {
    // After the view is initialized, this.userProfile will be available
    this.update();
  }

  update() {
    this.userProfile.sendData();
  }
}

```
We can also do the same thing with a local variable. Instead of trying to load the particular class, we can do:

```bash
# MasterPage.component.ts `parent`
import { Component, ViewChild } from '@angular/core';
import { UserProfile } from '../user-profile';

@Component({
  template: '<user-profile #myProfile (click)="update()"></user-profile>'
})
export class MasterPage {
  @ViewChild('myProfile') userProfile: UserProfile
  constructor() { }
  update(){
    this.userProfile.sendData();
  }
}
```
```bash
# UserProfile.component.ts  `child`

@Component({
  selector: 'user-profile'
})

export class UserProfile {
  constructor() {}
  sendData() {
    //send data
  }
}
```