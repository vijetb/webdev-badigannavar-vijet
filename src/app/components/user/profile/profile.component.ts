import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service.client';
import { User } from '../../../model/user.model.client';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SharedService } from '../../../services/shared-service.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userId: String;
  user: User = new User('', '', '', '', '', '');
  updateStatus: boolean;
  constructor(private userService: UserService, private sharedService: SharedService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
        // this.userId = params['uid'];
        // this.userService.findUserById(this.userId)
        //   .subscribe((user) =>  {
        //   if (user) {
        //       this.user = user;
        //     }
        // });
        this.user = this.sharedService.user;
    });
  }

  logout() {
    this.userService.logout()
      .subscribe((status) => {
        this.router.navigate(['/login']);
      });
  }

  updateUserInfo(user: User) {
    this.userService.updateUser(this.userId, this.user)
      .subscribe((data) =>  {
        this.updateStatus = data.success;
      });
  }
}
