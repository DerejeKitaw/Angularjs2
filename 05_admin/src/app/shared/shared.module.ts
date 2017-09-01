import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error/error.component';
import { NavComponent } from './nav/nav.component';

@NgModule( {
  imports: [],
  declarations: [
    ErrorComponent,
    NavComponent
  ],
  exports: [
    CommonModule
  ]
} )
export class SharedModule { }
