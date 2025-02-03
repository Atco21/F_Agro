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
  standalone: true,
  imports: [CommonModule, ModalCrearTratamientoComponent], //Importamos el modal
  templateUrl: './crear-orden.component.html',
  styleUrls: ['./crear-orden.component.css']
})
export class CrearOrdenComponent implements AfterViewInit {
  tratamientoSeleccionado: string = '';
//Se usa ViewChild para referenciar el componente hijo y manipularlo desde el padre
//@ViewChild() es un decorador de Angular que permite al componente padre obtener una referencia a un elemento hijo dentro de su plantilla (.html). Puede ser usado para acceder a:
//Un elemento HTML directamente,Un componente hijo (como en este caso),Una directiva.
  @ViewChild(ModalCrearTratamientoComponent) modalVerTarea!: ModalCrearTratamientoComponent;//  esto ! Angular se encargará de inicializar la variable más tarde, es decir, sabemos que la referencia existirá en tiempo de ejecución

 // ngAfterViewInit() Se ejecuta cuando la vista ha cargado. Verifica que modalVerTarea se haya inicializado correctamente.

  ngAfterViewInit() {
    if (!this.modalVerTarea) {
      console.error('modalVerTarea no está inicializado correctamente');
    }
  }
//recibe el tratamiento del hijo y lo almacena
  recibirTratamiento(tratamiento: string) {
    console.log('Tratamiento recibido en el padre:', tratamiento);//para verificar que llega el dato
    this.tratamientoSeleccionado = tratamiento;
  }
//llama al hijo para abrir el modal
  abrirModal() {
    if (this.modalVerTarea) {
      this.modalVerTarea.abrirModal();
    } else {
      console.error('modalVerTarea no está disponible');//verifica que el modal este disponible
    }
  }
}






