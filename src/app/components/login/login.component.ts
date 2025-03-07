import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; // Necesario para los formularios reactivos}


@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, ReactiveFormsModule, FormsModule  ]
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

  // Verificar si el campo está invalidado
  get f() { return this.loginForm.controls; }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return; // Si el formulario es inválido, no continúa
    }

    const { usuario, password } = this.loginForm.value;

    this.authService.login(usuario, password).subscribe({
      next: (result) => {
        console.log(result);
        localStorage.setItem('token', result.success.token);
        localStorage.setItem('rol', result.success.rol);


        // Redirigir según el rol del usuario
        if (result.success.rol === 'jefe de campo') {
          this.router.navigate(['dashboard']);
        } else if (result.success.rol === 'aplicador') {
          this.router.navigate(['tareas']);
        }
      },
      error: (err) => {
        this.errorMessage = 'Credenciales incorrectas';
        console.log(err)
      }
    });
    this.loginSuccess.emit();

  }
}
