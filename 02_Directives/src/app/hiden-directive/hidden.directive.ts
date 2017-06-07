import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[myHidden]'
})
export class HiddenDirective {
 constructor(el: ElementRef, renderer: Renderer) {
    // render element with style
    renderer.setElementStyle(el.nativeElement, 'dispaly', 'none');
   }

}
