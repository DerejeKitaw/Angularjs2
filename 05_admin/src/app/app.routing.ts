import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './shared/error/error.component';


import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'login', loadChildren: './admin/login/login.module#LoginModule' },
      { path: 'user', loadChildren: './user/user.module#UserModule' },
      { path: '**', pathMatch: 'full', component: ErrorComponent }

    ])
  ],
  exports:[RouterModule], // make it available what ever module is import
  providers: [],

})
export class AppRoutingModule { }
