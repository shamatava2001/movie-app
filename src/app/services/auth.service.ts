import { Injectable } from '@angular/core';
import { Users } from '../model/Users';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users: Users[] = [];

  constructor() {
    this.users = [
      { username: 'giga', password: 'giga2001' },
      { username: 'mate', password: 'mate2001' },
      { username: 'tornike', password: 'tornike2001' },
    ];
  }

  findUser(user: Users): Users | undefined {
    let match = this.users.find(item => {
      return item.username === user.username && item.password === user.password;
    });
    return match;
  }

  login(usrName: string, pass: string) {
    let res = this.findUser({ username: usrName, password: pass });
    let status = res ? 200 : 403;
    return status;
  }
}
