import { Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent{
  
usuario: string = '';
password: string = '';
errorMessage: string = '';
constructor(private authService: AuthService, private router: Router) {

 }
 login() {
  this.authService.login(this.usuario, this.password).subscribe({
    next: (response) => {
      localStorage.setItem('token', response.token);
      this.router.navigate(['/movil/dashboard']);
    },
    error: (err) => {
      this.errorMessage = 'Credenciales incorrectas';
    }
  });
}
}
