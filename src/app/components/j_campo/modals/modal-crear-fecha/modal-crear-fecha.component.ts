import { Component, ViewChild, ElementRef, Renderer2, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-crear-fecha',
  imports: [CommonModule,FormsModule],
  templateUrl: './modal-crear-fecha.component.html',
  styleUrl: './modal-crear-fecha.component.css'
})
export class ModalCrearFechaComponent {

  isVisibleFecha=false;

  fechaSeleccionada: string = "";  // Inicializa la fecha
  horaSeleccionada:string = "";

  @ViewChild('modalElement') modalElement!: ElementRef;
  @Output() fechaGuardada = new EventEmitter<{ fecha: string, hora: string }>();  // Emite tanto la fecha como la hora


  constructor(private rendered: Renderer2) {

  }

// Mostrar modal usando clases de Bootstrap
  abrirModal() {
    this.isVisibleFecha = true;
    this.rendered.addClass(this.modalElement.nativeElement, 'show');
    this.rendered.setAttribute(this.modalElement.nativeElement, 'aria-hidden', 'false');
    this.rendered.setStyle(this.modalElement.nativeElement, 'display', 'block');
  }


  // Cerrar modal solo con el botón "X"
  cerrarModal() {
    this.isVisibleFecha = false;
    this.rendered.removeClass(this.modalElement.nativeElement, 'show');
    this.rendered.setAttribute(this.modalElement.nativeElement, 'aria-hidden', 'true');
    this.rendered.setStyle(this.modalElement.nativeElement, 'display', 'none');
  }

  //Guardar cambios y emitir el tratamiento seleccionado
  guardarCambiosFecha() {
    if (this.fechaSeleccionada && this.horaSeleccionada) {
      console.log('Fecha seleccionada:', this.fechaSeleccionada);
      console.log('Hora seleccionada:', this.horaSeleccionada);
      this.fechaGuardada.emit({
        fecha: this.fechaSeleccionada,
        hora: this.horaSeleccionada
      });
      this.cerrarModal();
    } else {
      console.error('Por favor, selecciona una fecha y una hora');
    }
  }

}
