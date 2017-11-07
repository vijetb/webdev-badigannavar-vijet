import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service.client';
import { User } from '../../../model/user.model.client';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;

  username: String;
  password: String;
  loginError: String;
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {}

  login() {
    this.loginError = null;
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    this.userService.findUserByCredentials(this.username, this.password)
       .subscribe((user) =>  {
      console.log(user);
         if (user) {
           this.router.navigate(['/user', user._id]);
         }else {
           this.loginError = 'Invalid Username/ Password. Try again...';
         }
    });
  }

}
