import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.routing';
import { ErrorComponent } from './error/error.component';
import { NavComponent } from './nav/nav.component';
import { AdminModule } from './admin/admin.module';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    NavComponent

    
  ],
  imports: [
    
    AdminModule,  // must be befor AppRoutingModule
    BrowserModule,
    AppRoutingModule ,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
