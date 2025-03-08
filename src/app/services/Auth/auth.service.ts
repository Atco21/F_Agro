import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private LoginUrl = 'https://xz9bwhqq7a.laravel-sail.site/api/loginAngular';
  public tokenKey = 'authToken';
  public rolKey= 'rol';

  constructor(private httpClient: HttpClient, private router: Router) { }

  login(usuario: string, password: string): Observable<any> {
    console.log('Enviando credenciales:', { usuario, password });  // Verifica los datos enviados
    return this.httpClient.post(this.LoginUrl, { usuario, password });
  }



  private setToken(token: string): void{
    localStorage.setItem(this.tokenKey, token);
  }

  private getToken(): string | null{
    return localStorage.getItem(this.tokenKey);
  }
  public setRol(rol: string): void{
    localStorage.setItem(this.rolKey, rol);
  }
  public getRol(): string{
    return localStorage.getItem(this.rolKey )|| '';
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
    localStorage.removeItem(this.rolKey);
    this.router.navigate(['/login']);
  }

}
