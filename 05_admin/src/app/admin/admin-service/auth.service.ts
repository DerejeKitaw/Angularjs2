import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  public user$: Observable<firebase.User>;

  private connectState$: FirebaseObjectObservable<any>;
  private user: firebase.User;

  private userConnectionPath = 'queues/userConnection';
  private userConnectionRef: firebase.database.Reference;
  private userLoginPath = 'queues/userLogin';
  private userLoginRef: firebase.database.Reference;

  constructor(
    private afAuth: AngularFireAuth,
    private afDatabase: AngularFireDatabase
  ) {

    this.userConnectionRef = this.afDatabase.database.ref( this.userConnectionPath );
    this.userLoginRef = this.afDatabase.database.ref( this.userLoginPath );

    this.user$ = afAuth.authState.do(
      ( res ) => {
        if ( res ) {
          this.user = res;

          this.userConnectionRef.child( this.user.uid ).set( {
            connected: true,
            payload: { user: this.user.toJSON() },
            timestamp: firebase.database.ServerValue.TIMESTAMP
          } );

          this.userLoginRef.child( this.user.uid ).set( {
            logged: true,
            payload: { user: this.user.toJSON() },
            timestamp: firebase.database.ServerValue.TIMESTAMP
          } );

          console.log( res.displayName + ' is logged' );

        } else {
          console.log( 'No user logged' );
        }
      },
      ( err ) => { console.log( err ); },
      () => { console.log( 'this.authService.user$ completed' ); }
    );

    this.connectState$ = afDatabase.object( '.info/connected' );
    this.connectState$
      .map(( res ) => res.$value )
      .subscribe(
      ( res ) => {
        if ( this.user ) {
          this.userConnectionRef.child( this.user.uid ).set( {
            connected: res,
            payload: { user: this.user.toJSON() },
            timestamp: firebase.database.ServerValue.TIMESTAMP
          } );
          this.afDatabase.database.ref().onDisconnect().update( {
            [this.userConnectionPath + '/' + this.user.uid]: {
              connected: false,
              payload: { user: this.user.toJSON() },
              timestamp: firebase.database.ServerValue.TIMESTAMP
            }
          } );
        }
      },
      ( err ) => { console.log( err ); },
      () => { console.log( 'this.connectState$ completed' ); }
      );
  }
  logout(): firebase.Promise<any> {
    const promises: Array<firebase.Promise<any>> = [];

    promises.push( this.userConnectionRef.child( this.user.uid ).set( {
      connected: false,
      payload: { user: this.user.toJSON() },
      timestamp: firebase.database.ServerValue.TIMESTAMP
    } ) );

    promises.push( this.userLoginRef.child( this.user.uid ).set( {
      logged: false,
      payload: { user: this.user.toJSON() },
      timestamp: firebase.database.ServerValue.TIMESTAMP
    } ) );

    promises.push( this.afAuth.auth.signOut() );

    return Promise.all( promises );
  }
  get userProfile$(): FirebaseObjectObservable<any> {
    return this.afDatabase.object( 'users/' + this.user.uid );
  }
}
