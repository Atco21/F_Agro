import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [FormsModule, CommonModule],
  styleUrl: './login.component.css'
})
export default class LoginComponent {
  
  usuario: string = '';
  password: string = '';
  errorMessage: string = '';

  @Output() loginSuccess = new EventEmitter<void>(); // Evento para notificar al componente padre

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.usuario, this.password).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token);
        this.loginSuccess.emit(); // Emitir el evento cuando se inicie sesión con éxito
        this.router.navigate(['/movil/dashboard']);
      },
      error: (err) => {
        this.errorMessage = 'Credenciales incorrectas';
      }
    });
  }
}

