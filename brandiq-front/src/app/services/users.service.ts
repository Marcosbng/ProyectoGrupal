// users.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  login(user: { nickname: string; password: string }): Observable<any> {
    return this.http.post('http://localhost:8090/auth/login', user);
  }
}
