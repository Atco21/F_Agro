import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-crear-tarea',
  templateUrl: './modal-crear-tarea.component.html',
  styleUrls: ['./modal-crear-tarea.component.css']
})
export class ModalCrearTareaComponent {
  parcelaNombre: string = 'Nombre de la Parcela';
  aplicadorNombre: string = 'Nombre del Aplicador';
  tareaNombre: string = 'Nombre de la Tarea';
  maquinaNombre: string = 'Nombre de la Máquina';
  tratamientoNombre : string = 'Nombre del Tratamiento';
  fecha : string = 'Nombre de la Fecha';

  cerrarModal(): void {
    const modalElement = document.getElementById('modalCrearTarea');

    if (modalElement) {
      modalElement.classList.remove('show');
      modalElement.setAttribute('aria-hidden', 'true');
      modalElement.removeAttribute('aria-modal');
      modalElement.style.display = 'none';

      const modalBackdrop = document.querySelector('.modal-backdrop');
      if (modalBackdrop) {
        modalBackdrop.remove();
      }
    }
  }
}