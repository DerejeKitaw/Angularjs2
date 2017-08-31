import { Injectable } from '@angular/core';
import {CanActivate,Router,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';

import { Observable } from "rxjs/Observable";
import * as firebase from 'firebase';
@Injectable()
export class UserService implements CanActivate{
  
  userLoggedIn: boolean=false;
  loggedInUser: String;
  authUser: any;
  //firebase=environment.firebase;
  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    let url: string= state.url;
    return this.verifiyLogin(url);
  }

  verifiyLogin(url: string): boolean {
    if (this.userLoggedIn){return true;}

    this.router.navigate(['/admin/login']);
    return false;
  }

  register(email: string, password: string){
    firebase.auth().createUserWithEmailAndPassword(email,password)
      .catch(function(error){
        alert (`${error.message} Please Try Again!`);
      });
  }
  verifyUser(){
    this.authUser =firebase.auth().currentUser;
    // if someone is logged in
    if (this.authUser){
      alert(`welcome ${this.authUser.email}`);
      this.loggedInUser = this.authUser.email;
      this.userLoggedIn =true;
      this.router.navigate(['admin']);
    }
  }

  login(loginEmail: string, loginPassword: string){
    firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword)
      .catch(function(error){
        alert(`${error.message} Unable to login. Try again!`);
      });
  }

  logout(){
    this.userLoggedIn=false;
    firebase.auth().signOut().then(function(){
      alert(`Logged out!`);

    },function(error){
      alert(`${error.message} Unable to logout. Try again!`)
    });
  }

}
