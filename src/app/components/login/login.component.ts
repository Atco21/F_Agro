import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../services/Auth/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export default class LoginComponent {

  loginForm: FormGroup;
  errorMessage: string = '';

  @Output() loginSuccess = new EventEmitter<void>();

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

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const { usuario, password } = this.loginForm.value;

    this.authService.login(usuario, password).subscribe({
      next: (result) => {
        console.log(result)
        localStorage.setItem('token', result.success.token);
        localStorage.setItem('rol', result.success.rol);

        console.log(result.success.rol);

        // Redirigir según el rol del usuario
        if (result.success.rol === 'jefe de campo') {
          this.router.navigate(['/quimicos']);
        } else if (result.success.rol === 'aplicador') {
          this.router.navigate(['/dashboard']);
        }
      },
      error: (err) => {
        this.errorMessage = 'Credenciales incorrectas';
        console.log(err)
      }
    });
  }
}
