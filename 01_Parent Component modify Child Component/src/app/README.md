### How parent component change the property of child component.

`Parent component will use `@ViewChild` to call functions in child component.`


@ViewChild(myPredicate) myChildComponent;  | Binds the first result of the component view query (myPredicate) to a property (myChildComponent) of the class.
---       | ---
    | Not available for directives.




From parent component 
```bash
<button type="button" class="btn btn-default" (click)="ClearChildcounter()" >ClearChildcounter</button>
```

When a button in the parent componet clicked we want to triger a function in the child component to run. How can we access a function in parent component?

```
    parent.component.ts
```
```bash
ClearChildcounter(){
    this.childComponent.clear();
  }
```

```
    child.component.ts
```
```bash
clear(){
    this.counter=0;
  }
```

To make function in parent component `ClearChildcounter()` run functions in child component `clear()`. ChildComponent need to be bind to parent componet using `@ViewChild()`

```bash
@ViewChild (ChildComponent) childComponent: ChildComponent
```
