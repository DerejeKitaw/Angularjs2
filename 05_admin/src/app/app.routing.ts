import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot([
      {path:'', component: HomeComponent},
      {path:'**', component: ErrorComponent},

    ])
  ],
  exports:[RouterModule], // make it available what ever module is import
  providers: [],

})
export class AppRoutingModule { }