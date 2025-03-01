import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const role = localStorage.getItem('role');

    if (role == 'jefe de campo') {
      return true; // Evita que acceda a rutas que no le corresponden
    } else if (role == 'aplicador') {
      return true; 
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
