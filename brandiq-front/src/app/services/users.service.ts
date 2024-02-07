// users.service.ts
import { Injectable } from '@angular/core';
import { Observable, Subject, map } from 'rxjs';
import { User } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  login(user: { nickname: string; password: string }): Observable<any> {
    return this.http.post(environment.URL_SPRING + 'auth/login', user);
  }
  register(user: {
    nickname: string;
    nombre: string;
    email: string;
    password: string;
    // confirmPassword: string,
  }): Observable<any> {
    return this.http.post(environment.URL_SPRING + 'auth/nuevo', user);
  }
}
