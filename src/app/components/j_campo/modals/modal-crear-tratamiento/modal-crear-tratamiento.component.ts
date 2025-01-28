import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-crear-tratamiento',
  imports: [],
  templateUrl: './modal-crear-tratamiento.component.html',
  styleUrl: './modal-crear-tratamiento.component.css'
})
export class ModalCrearTratamientoComponent {
  openModal() {
    const modal = document.getElementById('modalTratamiento');
    if (modal) {
      modal.style.display = 'block';
      modal.classList.add('show');
    }
  }

  closeModal() {
    const modal = document.getElementById('modalTratamiento');
    if (modal) {
      modal.style.display = 'none';
      modal.classList.remove('show');
    }
  }
}

