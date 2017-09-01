import { Component, OnInit } from '@angular/core';

import { FirebaseObjectObservable } from 'angularfire2/database';
import { AuthService } from '../../admin/admin-service/auth.service';

@Component( {
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
} )
export class ProfileComponent implements OnInit {
  userProfile$: FirebaseObjectObservable<any>;

  constructor( private authService: AuthService ) { }

  ngOnInit() {
    this.userProfile$ = this.authService.userProfile$;
  }

}
