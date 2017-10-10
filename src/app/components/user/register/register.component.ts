import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service.client';
import { Router } from '@angular/router';
import { User } from '../../../model/user.model.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationError: String;
  username: String;
  password: String;
  passwordDuplicated: String;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {}

  registerUser(username: String, password: String, passwordDuplicated: String) {
    this.registrationError = null;
    if (password === passwordDuplicated) {
      if (this.userService.findUserByUsername(username) != null) {
            this.registrationError = 'Username exists';
      }else {
            let user: User = new User(null, username, password, null, null, null);
            user = this.userService.createUser(user);
            this.router.navigate(['/user', user._id]);
      }
    }else {
        this.registrationError = 'Password mismatch';
    }

  }
}
