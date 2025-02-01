//importamos Ouput y EventEmitter para poder emitir el valor del tratamiento al padre
import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-crear-tratamiento',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modal-crear-tratamiento.component.html',
  styleUrls: ['./modal-crear-tratamiento.component.css']
})

export class ModalCrearTratamientoComponent {
  tratamiento: string = '';
//creamos un evento que emitirá el valor del tratamiento al padre
@Output() tratamientoEnviado = new EventEmitter<string>();
constructor(private router: Router) {}  // Inyecta Router correctamente
enviarAlPadre(tratamiento: string) {
  this.tratamientoEnviado.emit(tratamiento);
  console.log('Tratamiento enviado al padre:', tratamiento);
  this.router.navigate(['/crear orden']);  // Navegar correctamente
}
}

