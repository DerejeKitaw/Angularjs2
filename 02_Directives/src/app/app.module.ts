import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HiddenDirective } from './hiden-directive/hidden.directive';
import { HighlightDirective } from './directive-highlight/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HiddenDirective,
    HighlightDirective
  ],
  imports: [
    BrowserModule
  ],
  exports:[
    HiddenDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
