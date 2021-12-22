import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(login: number,code_commune:string, password: string,): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      login,
      code_commune,
      password,
      
    }, httpOptions);
  }

  register(username: string, login: number, password: string,code_commune:string,): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      login,
      password,
      code_commune,
      
     
    }, httpOptions);
  }
}
