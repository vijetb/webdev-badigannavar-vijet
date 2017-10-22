import { User } from '../model/user.model.client';
import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';

@Injectable()
export class UserService {

  constructor(private http: Http) {}

  baseUrl = environment.baseUrl;
  users: User[] = [
    new User('123', 'alice', 'alice', 'Alice', 'Wonder', 'alice@alice.com'),
    new User('234', 'bob', 'bob', 'Bob', 'Marley', 'bob@bob.com'),
    new User('345', 'charly', 'charly', 'Charly', 'Garcia', 'charley@charley.com'),
    new User('456', 'jannunzi', 'jannunzi', 'Jose', 'Annunzi', 'jose@jose.com')
  ];
  createUser(user: User) {
    return this.http.post(this.baseUrl + '/api/user', user)
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
    let i = 0;
    for (i ; i < this.users.length ; ++i ) {
      if (this.users[i]._id === userId) {
        this.users.splice(i, 1);
      }
    }
  }
}

