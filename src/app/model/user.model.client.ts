export class User {
  _id: String;
  userName: String;
  password: String;
  firstName: String;
  lastName: String;
  email: String;

  constructor(id: String, username: String, password: String, firstName: String, lastName: String, email: String) {
    this._id = id;
    this.userName = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
}
