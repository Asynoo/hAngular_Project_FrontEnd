import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../shared/auth.service';
import {LoginUser} from '../shared/login-user.model';
import {Router} from '@angular/router';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private _auth: AuthService,
              private router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(2)
        ]
      ),
      password: new FormControl(
        '',
        Validators.required
      ),
    })
  }

  ngOnInit(): void {
  }

  login() {
    if(this.loginForm.valid) {
      let userLogin = this.loginForm.value as LoginUser;
      console.log('Login info', userLogin);
      this._auth.login(userLogin)
        .subscribe(token => {
          console.log('trying to login')
          if(token && token.jwtToken) {
            this.router.navigateByUrl('pets');
          }
          else {
            console.log('login failed')
          }
        });
    }
  }

  get username() {return this.loginForm.get('username')}
  get password() {return this.loginForm.get('password')}
}
