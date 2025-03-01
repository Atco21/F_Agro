import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; // Necesario para los formularios reactivos}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, ReactiveFormsModule, FormsModule  ]
})



export default class LoginComponent implements OnInit {
  

  loginForm!: FormGroup;

  errorMessage: string = '';

  @Output() loginSuccess = new EventEmitter<void>(); // Evento para notificar al componente padre
nombre: any;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    // private loginForm: FormGroup,
    
    private authService: AuthService
  ) {
    // Crear el FormGroup con validadores

  }


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      usuario:['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  // Función para manejar el submit del formulario
  onSubmit(): void {

    //console.log(this.loginForm.usuario, this.loginForm.password);
    console.log(this.loginForm.value);
    console.log(this.loginForm.get('usuario')?.value);
    console.log(this.loginForm.get('password')?.value);
    this.authService.login(this.loginForm.get('usuario')?.value, this.loginForm.get('password')?.value).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token);
        console.log("response", response);  
        this.router.navigate(['/movil/dashboard']);
      },
      error: (err) => {
        this.errorMessage = 'Credenciales incorrectas';
  }});
}
}
