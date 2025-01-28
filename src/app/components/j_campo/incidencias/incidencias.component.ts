import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incidencias',
  standalone: true,
  templateUrl: './incidencias.component.html',
  styleUrls: ['./incidencias.component.css'],
})
export class IncidenciasComponent implements OnInit {

  ngOnInit(): void {
    this.openModal();
  }

  openModal() {
    const modal = document.getElementById('modalIncidencia');
    if (modal) {
      modal.style.display = 'block';
      modal.classList.add('show');
      modal.setAttribute('aria-modal', 'true');
      modal.setAttribute('role', 'dialog');
      document.body.classList.add('modal-open');
    }
  }

  closeModal() {
    const modal = document.getElementById('modalIncidencia');
    if (modal) {
      modal.style.display = 'none';
      modal.classList.remove('show');
      modal.removeAttribute('aria-modal');
      modal.removeAttribute('role');
      document.body.classList.remove('modal-open');
    }
  }
}
