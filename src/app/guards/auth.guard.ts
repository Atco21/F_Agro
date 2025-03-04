import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const rol = localStorage.getItem('rol');

    if (rol === 'jefecampo') {
      this.router.navigate(['/dashboard']);
      return false; // Evita que acceda a rutas que no le corresponden
    } else if (rol === 'aplicador') {
      this.router.navigate(['/movil/dashboard-aplicador']);
      return false;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
