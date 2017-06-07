// The import statement specifies symbols from the Angular core:
// Directive provides the functionality of the @Directive decorator.
// ElementRef injects into the directive's constructor so the code can access the DOM element.
// Input allows data to flow from the binding expression into the directive.

import { Directive, ElementRef, HostListener,Input } from '@angular/core';

@Directive({ selector: '[myHighlight]' })
export class HighlightDirective {
  constructor(private el: ElementRef) {
    //el.nativeElement.style.backgroundColor = 'yellow';
  }

  // pass value into the directive
  @Input('myHighlight') highlightColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    console.log('mouseEnter');
    console.log(this.highlightColor);
    // if color is null or not defined use red to hightlight
    this.highlight(this.highlightColor || 'red');
  }
  // @HostListener('mousedown') onMouseDawn() {
  //   console.log('mouseDawn');
  //   this.highlight('red');
  // }
    @HostListener('click',['$event']) onMouseClick() {
    console.log('mouseClicked');
    this.highlight('green');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.color = 'pink';
  }

}
