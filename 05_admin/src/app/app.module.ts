import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.routing';
import { ErrorComponent } from './error/error.component';
import { NavComponent } from './nav/nav.component';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    NavComponent

    
  ],
  imports: [
    BrowserModule,
    AdminModule,  // must be befor AppRoutingModule
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
