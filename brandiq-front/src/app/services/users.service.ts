// users.service.ts
import { Injectable } from '@angular/core';
import { Observable, Subject, map } from 'rxjs';
import { User } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  constructor(private http: HttpClient) { }

  userSubject = new Subject<User>();

  login(user: { 
    nickname: string; 
    password: string 
  }): Observable<any> {
    return this.http.post('http://localhost:8090/auth/login', user);
  }

  register(user: {
    nickname: string,
    nombre: string,
    email: string,
    password: string,
    // confirmPassword: string,
  }): Observable<any> {
     return this.http.post('http://localhost:8090/auth/nuevo', user);
  }
}
