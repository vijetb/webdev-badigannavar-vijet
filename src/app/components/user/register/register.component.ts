import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service.client';
import { Router } from '@angular/router';
import { User } from '../../../model/user.model.client';
import { SharedService } from '../../../services/shared-service.service.client';

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
  constructor(private userService: UserService, private sharedService: SharedService , private router: Router) { }

  ngOnInit() {}

  registerUser(username: String, password: String, passwordDuplicated: String) {
    this.registrationError = null;
    if (password === passwordDuplicated) {

      this.userService.findUserByUsername(username)
        .subscribe((data1: any) => {
          if (data1) {
            this.registrationError = 'Username exists';
          }else {
            // let user: User = new User(null, username, password, null, null, null);
            // this.userService.createUser(user)
            //   .subscribe((data: any) => {
            //     user = data;
            //     console.log(user);
            //     this.router.navigate(['/user', user._id]);
            //   });
            this.userService.register(username, password)
              .subscribe((data) => {
                this.sharedService.user = data;
                console.log(data);
                console.log('success');
                this.router.navigate(['/profile']);
              });

          }
        });
    }else {
        this.registrationError = 'Password mismatch';
    }

  }
}
