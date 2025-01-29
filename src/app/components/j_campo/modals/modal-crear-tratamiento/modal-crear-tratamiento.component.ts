import { Component} from '@angular/core';

@Component({
  selector: 'app-modal-crear-tratamiento',
  templateUrl: './modal-crear-tratamiento.component.html',
  styleUrls: ['./modal-crear-tratamiento.component.css']
})
export class ModalCrearTratamientoComponent {
  tratamientoNombre: string = 'Nombre del Tratamiento';

  constructor() {}

  cerrarModal(): void {
    console.log('Modal cerrado');
  }
}

