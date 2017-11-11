import { User } from '../model/user.model.client';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import { SharedService } from './shared-service.service.client';
import { Router } from '@angular/router';

@Injectable()
export class UserService {

  constructor(private http: Http, private sharedService: SharedService, private router: Router) {}

  baseUrl = environment.baseUrl;

  options: RequestOptions = new RequestOptions();

  register(username, password) {
    const credentials = {
      username: username,
      password: password
    };
    this.options.withCredentials = true;
    return this.http.post(this.baseUrl + '/api/register', credentials, this.options)
      .map((response: Response) => {
        return response.json();
      });
  }

  login(username, password) {
    const credentials = {
      username: username,
      password: password
    };
    this.options.withCredentials = true;
    return this.http.post(this.baseUrl + '/api/login', credentials, this.options)
      .map((response: Response) => {
        return response.json();
      });
  }

  logout() {
    this.options.withCredentials = true;
    return this.http.post(this.baseUrl + '/api/logout', '', this.options)
      .map((status) => {
        return status;
      });
  }

  loggedIn() {
    this.options.withCredentials = true;
    return this.http.post(this.baseUrl + '/api/loggedIn', '', this.options)
      .map((res: Response) => {

        // console.log('----');
        // console.log(res);
        const user = res.json();
        console.log(user);
        // console.log('----');
        if (user.u === 0) {
          this.router.navigate(['/login']);
          return false;
        } else {
          this.sharedService.user = user;
          return true;
        }
      });
  }



  createUser(user: User) {
    const u = {
      username: user.username,
      password: user.password
    };
    return this.http.post(this.baseUrl + '/api/user', u)
      .map((res: Response) => {
          return res.json();
        }
      );
  }

  findUserById(userId: String) {
      return this.http.get(this.baseUrl + '/api/user/' + userId)
      .map((res: Response) => {
          return res.json();
        });
  }

  findUserByUsername(username: String) {
    return this.http.get(this.baseUrl + '/api/user?username=' + username)
      .map((res: Response) => {
          return res.json();
        }
      );
  }

  findUserByCredentials(username: String, password: String) {
    return this.http.get(this.baseUrl + '/api/user?username=' + username + '&password=' + password)
      .map((res: Response) => {
          return res.json();
        }
      );
  }

  updateUser(userId: String, user: User) {
    return this.http.put(this.baseUrl + '/api/user/' + userId, user)
      .map((res: Response) => {
          return res.json();
        }
      );
  }

  deleteUser(userId: String) {
    return this.http.delete(this.baseUrl + '/api/user/' + userId)
      .map((res: Response) => {
          return res.json();
        }
      );
  }
}

