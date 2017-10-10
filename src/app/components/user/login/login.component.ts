import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service.client';
import { User } from '../../../model/user.model.client';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;
  loginError: String;
  flag: boolean;
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {}

  validate(username: String, password: String) {
     const user: User = this.userService.findUserByCredentials(username, password);
     if (user) {
       this.router.navigate(['/user', user._id]);
     }else {
       this.loginError = 'Invalid Username/ Password. Try again...';
     }
  }

  registration() {
    this.router.navigate(['/register']);
  }
}
