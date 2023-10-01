import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMsg: string = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  login(): void {
    if (this.username.trim().length === 0) {
      this.errorMsg = 'username is required!';
    } else if (this.password.trim().length === 0) {
      this.errorMsg = 'password is required!';
    } else {
      // როდესაც, შეყვანილია სახელი და პაროლი
      this.errorMsg = '';
      let status = this.auth.login(this.username, this.password);
      if (status === 200) this.router.navigate(['home']);
      if (status === 403) this.errorMsg = 'Invalid Username  Or Password';
    }
  }
}
