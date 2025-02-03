// import { Component } from '@angular/core';
// import { Router, RouterLink } from '@angular/router';


// @Component({
//   selector: 'app-crear-orden',
//   standalone: true,  // Declarar el componente como standalone
//   imports: [RouterLink],  // Importa lo necesario
//   templateUrl: './crear-orden.component.html',
//   styleUrls: ['./crear-orden.component.css']
// })
// export class CrearOrdenComponent {
//   parcelaNombre: string = 'Nombre de la Parcela';
//   aplicadorNombre: string = 'Nombre del Aplicador';
//   tareaNombre: string = 'Nombre de la Tarea';
//   maquinaNombre: string = 'Nombre de la Máquina';
//   tratamientoNombre : string = '';///recibe el dato del hijo
//   fecha : string = 'Nombre de la Fecha';

//   constructor(private router: Router) {}

//   cerrarModal(): void {
//     // Aquí puedes agregar cualquier lógica adicional que necesites
//     console.log('Modal cerrado');
//   }
//   // navegarAParcela(): void {
//   //    document.getElementById('modalCrearTarea')?.setAttribute('aria-hidden', 'false');
//   //   this.router.navigate(['modal-crear-tarea']);
//   //   console.log('hago click');
//   // }

//   recibirTratamiento(tratamiento: string) {
//     this.tratamientoNombre = tratamiento; // Guardar el tratamiento recibido
//     console.log('Tratamiento recibido:', this.tratamientoNombre); // Verificar si llega
//   }

// }




import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ModalCrearTratamientoComponent } from '../modal-crear-tratamiento/modal-crear-tratamiento.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crear-orden',
  standalone: true, // 👈 Indica que es standalone
  imports: [CommonModule, ModalCrearTratamientoComponent], // 👈 Importamos el modal
  templateUrl: './crear-orden.component.html',
  styleUrls: ['./crear-orden.component.css']
})
export class CrearOrdenComponent implements AfterViewInit {
  tratamientoSeleccionado: string = '';

  @ViewChild(ModalCrearTratamientoComponent) modalVerTarea!: ModalCrearTratamientoComponent;

  ngAfterViewInit() {
    if (!this.modalVerTarea) {
      console.error('modalVerTarea no está inicializado correctamente');
    }
  }

  recibirTratamiento(tratamiento: string) {
    console.log('Tratamiento recibido en el padre:', tratamiento);
    this.tratamientoSeleccionado = tratamiento;
  }

  abrirModal() {
    if (this.modalVerTarea) {
      this.modalVerTarea.abrirModal();
    } else {
      console.error('modalVerTarea no está disponible');
    }
  }
}






