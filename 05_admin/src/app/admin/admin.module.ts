import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { Routes, RouterModule } from '@angular/router';
import { UserService } from './admin-common/user.service';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment';
import { BrowserModule } from '@angular/platform-browser';

const AdminRoutes: Routes =[
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'sinup', component: SignupComponent},
      {path: '', component: AdminMenuComponent, canActivate: [UserService]},

    ]
  }
];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),

    RouterModule.forChild(AdminRoutes)
  ],
  exports:[
    RouterModule
  ],
  declarations: [LoginComponent, AdminMenuComponent, SignupComponent, AdminComponent],
  providers: [UserService]
})
export class AdminModule { }
