import { NgModule } from '@angular/core';


import {
  AuthMethods,
  AuthProviders,
  FirebaseUIAuthConfig,
  FirebaseUIModule
} from 'firebaseui-angular';

import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from '../../shared/shared.module';

const firebaseUiAuthConfig: FirebaseUIAuthConfig = {
  providers: [
    AuthProviders.Google,
    AuthProviders.Facebook,
    AuthProviders.Twitter,
    AuthProviders.Github,
    AuthProviders.Password,
    AuthProviders.Phone
  ],
  method: AuthMethods.Popup,
  tos: '<your-tos-link>'
};

@NgModule( {
  imports: [
    SharedModule,
    FirebaseUIModule.forRoot( firebaseUiAuthConfig ),
    LoginRoutingModule
  ],
  declarations: [
    LoginRoutingModule.components
  ]
} )
export class LoginModule { }
