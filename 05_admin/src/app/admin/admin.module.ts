import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent, AdminMenuComponent]
})
export class AdminModule { }
