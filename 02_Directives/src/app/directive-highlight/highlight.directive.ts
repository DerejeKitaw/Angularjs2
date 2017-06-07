// The import statement specifies symbols from the Angular core:
// Directive provides the functionality of the @Directive decorator.
// ElementRef injects into the directive's constructor so the code can access the DOM element.
// Input allows data to flow from the binding expression into the directive.

import { Directive, ElementRef, Input } from '@angular/core';

@Directive({ selector: '[myHighlight]' })
export class HighlightDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }
}
