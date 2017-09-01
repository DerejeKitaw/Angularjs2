import { Component } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';
import { AuthService } from "./admin/admin-service/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  user: firebase.User;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.user$.subscribe(
      ( res ) => {
        this.user = res;
        if ( res ) {
          this.router.navigate( [''] );
        }
      }
    );
  }
  logout(): firebase.Promise<any> {
    return this.authService.logout()
      .then(( data ) => { console.log( 'logged out' ); } )
      .catch(( err ) => { console.log( err ); } );
  }
}
