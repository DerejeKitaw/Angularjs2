import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Feature Modules */

import { FormsModule } from '@angular/forms';
import {FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';


/* Routing Module */
import { AppRoutingModule } from './app.routing';

/* App Root Component */
import { AppComponent } from './app.component';


import { SharedModule } from './shared/shared.module';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
      
  ],
  imports: [
    
    AdminModule,  // must be befor AppRoutingModule
    BrowserModule,
    SharedModule,
    AppRoutingModule ,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
