import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; // Necesario para los formularios reactivos


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export default class LoginComponent {

  loginForm: FormGroup;
  errorMessage: string = '';

  @Output() loginSuccess = new EventEmitter<void>(); // Evento para notificar al componente padre

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    // Crear el FormGroup con validadores
    this.loginForm = this.fb.group({
      usuario: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  // Función para manejar el submit del formulario
  onSubmit(): void {
    if (this.loginForm.invalid) {
      return; // Si el formulario es inválido, no se envía
    }

    const { usuario, password } = this.loginForm.value;

    // Llamada al servicio para hacer login
    this.authService.login(usuario, password).subscribe({
      next: (result) => {
        // Guardar token y rol en localStorage
        localStorage.setItem('token', result.token);
        localStorage.setItem('role', result.role);
        
        // Redirigir según el rol del usuario
        if (result.role === 'jefe') {
          this.router.navigate(['/movil/quimicos']); // Redirigir a la página de Jefe
        } else if (result.role === 'aplicador') {
          this.router.navigate(['/movil/dashboard']); // Redirigir a la página del Aplicador
        }
      },
      error: (err) => {
        this.errorMessage = 'Credenciales incorrectas';
        alert('Credenciales incorrectas');
      }
    });
  }
}
