import { Component, ViewChild, ElementRef, Renderer2, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-modal-crear-tarea',
  imports: [CommonModule, FormsModule],
  templateUrl: './modal-crear-tarea.component.html',
  styleUrl: './modal-crear-tarea.component.css'
})
export class ModalCrearTareaComponent {
  isVisibleTarea = false; // Controla la visibilidad del modal
  tareaSeleccionada: string = "";  // Inicializado a null o un objeto vacío

  @ViewChild('modalElement') modalElement!: ElementRef;
  @Output() tareaGuardada = new EventEmitter<string>();  // Emite el tarea seleccionado al padre



  constructor(private rendered: Renderer2) {

  }


  // Mostrar modal usando clases de Bootstrap
  abrirModal() {
    this.isVisibleTarea = true;
    this.rendered.addClass(this.modalElement.nativeElement, 'show');
    this.rendered.setAttribute(this.modalElement.nativeElement, 'aria-hidden', 'false');
    this.rendered.setStyle(this.modalElement.nativeElement, 'display', 'block');
  }

  // Cerrar modal solo con el botón "X"
  cerrarModal() {
    this.isVisibleTarea = false;
    this.rendered.removeClass(this.modalElement.nativeElement, 'show');
    this.rendered.setAttribute(this.modalElement.nativeElement, 'aria-hidden', 'true');
    this.rendered.setStyle(this.modalElement.nativeElement, 'display', 'none');
  }

  // Guardar cambios y emitir el tratamiento seleccionado
  guardarCambiosTarea() {
    console.log('Emitiendo:', this.tareaSeleccionada);  // Verifica el objeto completo
    this.tareaGuardada.emit(this.tareaSeleccionada);
    this.cerrarModal();
  }
  }





