import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class JefeGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const rol = this.authService.getRol();
    if (rol === 'jefe') {
      return true; // El usuario tiene el rol de jefe, puede acceder
    } else {
      this.router.navigate(['/login']); // Si no es jefe, redirige al login
      return false;
    }
  }
}
