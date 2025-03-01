import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AplicadorGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const rol = this.authService.getRol();
    if (rol === 'aplicador') {
      return true; // El usuario tiene el rol de aplicador, puede acceder
    } else {
      this.router.navigate(['/login']); // Si no es aplicador, redirige al login
      return false;
    }
  }
}
