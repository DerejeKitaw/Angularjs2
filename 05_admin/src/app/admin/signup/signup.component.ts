import { Component, OnInit } from '@angular/core';
import { UserService } from '../admin-common/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email:string;
  password1  :string;
  password2 : string;
  passwordFail: boolean=false;

  constructor(private userSVC: UserService, private router:Router) { }

  ngOnInit() {
  }
signUp(){
  if (this.password1 !== this.password2){
    this.passwordFail=true;
  }else{
    this.passwordFail=true;
    this.userSVC.register(this.email,this.password1);
    this.userSVC.verifyUser();
  }
}

cancel(){
  this.router.navigate(['/admin/login']);
}
}
