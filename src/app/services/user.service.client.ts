import { User } from '../model/user.model.client';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  users: User[] = [
    new User('123', 'alice', 'alice', 'Alice', 'Wonder', 'alice@alice.com'),
    new User('234', 'bob', 'bob', 'Bob', 'Marley', 'bob@bob.com'),
    new User('345', 'charly', 'charly', 'Charly', 'Garcia', 'charley@charley.com'),
    new User('456', 'jannunzi', 'jannunzi', 'Jose', 'Annunzi', 'jose@jose.com')
  ];
  createUser(user: User) {
    const newUserId = ((+this.users[this.users.length - 1]._id) + 100).toLocaleString();
    user._id = newUserId;
    this.users.push(user);
    return user;
  }

  findUserById(userId: String) {
    return this.users.find(function (user) {
      return user._id === userId;
    });
  }

  findUserByUsername(username: String) {
    return this.users.find(function (user) {
      return user.userName === username;
    });
  }

  findUserByCredentials(username: String, password: String) {
    return this.users.find(function(user) {
      return user.userName === username && user.password === password;
    });
  }

  updateUser(userId: String, user: User) {
    let i = 0;
    for (i ; i < this.users.length ; ++i ) {
      if (this.users[i]._id === userId) {
        this.users[i] = user;
        return true;
      }
    }
    return false;
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

