import { Injectable } from '@angular/core';
import {CanActivate,Router,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
import { Observable } from "rxjs/Observable";
@Injectable()
export class UserService implements CanActivate{
  
  userLoggedIn: boolean=false;
  
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


}
