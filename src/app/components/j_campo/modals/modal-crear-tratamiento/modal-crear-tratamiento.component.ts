import { Component, ViewChild, ElementRef, Renderer2, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-crear-tratamiento',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './modal-crear-tratamiento.component.html',
  styleUrls: ['./modal-crear-tratamiento.component.css']
})
export class ModalCrearTratamientoComponent {
  isVisible = false; // Controla la visibilidad del modal
  tratamientos: string[] = ['moscablanca', 'moscamediterraneo', 'sdfg', 'sfds', 'sdfds'];
  tratamientoSeleccionado: string = '';

  @ViewChild('modalElement') modalElement!: ElementRef;
  @Output() tratamientoGuardado = new EventEmitter<string>();

  constructor(private rendered: Renderer2) {}

  // Mostrar modal usando clases de Bootstrap
  abrirModal() {
    this.isVisible = true;
    this.rendered.addClass(this.modalElement.nativeElement, 'show');
    this.rendered.setAttribute(this.modalElement.nativeElement, 'aria-hidden', 'false');
    this.rendered.setStyle(this.modalElement.nativeElement, 'display', 'block');
  }

  // Cerrar modal solo con el botón "X"
  cerrarModal() {
    this.isVisible = false;
    this.rendered.removeClass(this.modalElement.nativeElement, 'show');
    this.rendered.setAttribute(this.modalElement.nativeElement, 'aria-hidden', 'true');
    this.rendered.setStyle(this.modalElement.nativeElement, 'display', 'none');
  }

  // Guardar cambios y emitir el tratamiento seleccionado
  guardarCambios() {
    if (this.tratamientoSeleccionado) {
      this.tratamientoGuardado.emit(this.tratamientoSeleccionado);
      this.cerrarModal();
    }
  }
}






