import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-modal-crear-tarea',
  imports: [RouterLink],
  templateUrl: './crear-orden.component.html',
  styleUrls: ['./crear-orden.component.css']
})
export class ModalCrearTareaComponent {
  parcelaNombre: string = 'Nombre de la Parcela';
  aplicadorNombre: string = 'Nombre del Aplicador';
  tareaNombre: string = 'Nombre de la Tarea';
  maquinaNombre: string = 'Nombre de la Máquina';
  tratamientoNombre : string = 'Nombre del Tratamiento';
  fecha : string = 'Nombre de la Fecha';

  constructor(private router: Router) {}

  cerrarModal(): void {
    // Aquí puedes agregar cualquier lógica adicional que necesites
    console.log('Modal cerrado');
  }
  // navegarAParcela(): void {
  //    document.getElementById('modalCrearTarea')?.setAttribute('aria-hidden', 'false');
  //   this.router.navigate(['modal-crear-tarea']);
  //   console.log('hago click');
  // }

}
