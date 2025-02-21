import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private LoginUrl = 'http://127.0.0.1:8000/api/loginAngular';
  private tokenKey = 'authToken';
  
  constructor(private httpClient: HttpClient, private router: Router) { }

  login(usuario:string, password: string): Observable<any>{
    return this.httpClient.post(this.LoginUrl, {usuario, password});
  }

  private setToken(token: string): void{
    localStorage.setItem(this.tokenKey, token);
  }

  private getToken(): string | null{
    return localStorage.getItem(this.tokenKey);
  }

  isAuthenticated(): boolean{
    const token = this.getToken();
    if(!token){
      return false;
    }
    const payload = JSON.parse(atob(token.split('.')[1]));
    const expired = payload.exp * 1000;
    return Date.now() < expired;
  }

  logOut(): void{
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }

}
