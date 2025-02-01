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





import { Component, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ModalCrearTratamientoComponent } from '../modal-crear-tratamiento/modal-crear-tratamiento.component';
@Component({
  selector: 'app-crear-orden',
  standalone: true,
  imports: [RouterLink, ModalCrearTratamientoComponent],  // Importar el hijo
  templateUrl: './crear-orden.component.html',
  styleUrls: ['./crear-orden.component.css']
})
export class CrearOrdenComponent  {
  parcelaNombre: string = 'Nombre de la Parcela';
  aplicadorNombre: string = 'Nombre del Aplicador';
  tareaNombre: string = 'Nombre de la Tarea';
  maquinaNombre: string = 'Nombre de la Máquina';
  tratamientoNombre: string = " ";  // Guardar el valor recibido del hijo
  fecha: string = 'Nombre de la Fecha';

  // Este es el método que llamas desde el HTML
 @Output() tratamientoEnviado = new EventEmitter<string>();  // Definir un EventEmitter para emitir el valor



  constructor() {}


 // tratamiento: string = '';  // Variable de tratamiento para almacenar lo que se introduce en el input

  // constructor() {}

  //Método que enviará el tratamiento al hijo

  recibirTratamiento(tratamiento: string) {
    this.tratamientoNombre = tratamiento;  // Guardar el tratamiento recibido
    console.log('Tratamiento recibido:', this.tratamientoNombre);  // Verificar que llega correctamente
  }

}
