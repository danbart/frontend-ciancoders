import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import {
  ACCESS_TOKEN,
  API,
  AUTH,
  LOGIN,
  PROFILE,
  REGISTER,
  USER,
} from '../common/constants';
import { UserInterface } from '../common/interfaces/user.interface';

const baseUrl = `${API}`;
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loginUrl = `${API}/${AUTH}/${LOGIN}`;
  registerUrl = `${API}/${AUTH}/${REGISTER}`;
  userUrl = `${API}/${AUTH}/${PROFILE}`;
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient, private router: Router) {}

  signIn(user: UserInterface): Promise<any> {
    return this.http.post(this.loginUrl, user).toPromise();
  }

  signUp(user: UserInterface): Promise<any> {
    return this.http.post(this.registerUrl, user).toPromise();
  }

  isLoggedIn(): Observable<boolean> {
    let authToken = localStorage.getItem(ACCESS_TOKEN);
    return of(authToken !== null ? true : false);
  }

  doLogout() {
    let removeToken = localStorage.removeItem(ACCESS_TOKEN);
    let removeUserInfo = localStorage.removeItem(USER);
    if (removeToken == null && removeUserInfo == null) {
      this.router.navigate([`${AUTH}/${LOGIN}`]);
    }
  }

  getToken() {
    return localStorage.getItem(ACCESS_TOKEN);
  }

  getUserProfile(): Promise<any> {
    return this.http.get(this.userUrl, { headers: this.headers }).toPromise();
  }
}
