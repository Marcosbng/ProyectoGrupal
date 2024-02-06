// users.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  login(user: { nickname: string; password: string }): Observable<any> {
    return this.http.post(environment.URL_SPRING + 'auth/login', user);
  }
}
