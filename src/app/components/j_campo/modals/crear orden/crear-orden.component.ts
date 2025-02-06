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
  tratamientoSeleccionado: any = null;
//Se usa ViewChild para referenciar el componente hijo y manipularlo desde el padre
//@ViewChild() es un decorador de Angular que permite al componente padre obtener una referencia a un elemento hijo dentro de su plantilla (.html). Puede ser usado para acceder a:
//Un elemento HTML directamente,Un componente hijo (como en este caso),Una directiva.
  // @ViewChild(ModalCrearTratamientoComponent) modalVerTarea!: ModalCrearTratamientoComponent;//  esto ! Angular se encargará de inicializar la variable más tarde, es decir, sabemos que la referencia existirá en tiempo de ejecución
  @ViewChild('modalVerTarea') modalVerTarea!: ModalCrearTratamientoComponent;
  // ngAfterViewInit() Se ejecuta cuando la vista ha cargado. Verifica que modalVerTarea se haya inicializado correctamente.

  ngAfterViewInit() {
    if (!this.modalVerTarea) {
      console.error('modalVerTarea no está inicializado correctamente');
    }
  }
//recibe el tratamiento del hijo y lo almacena
recibirTratamiento(tratamiento: any) {
  console.log('Recibido en el padre:', tratamiento);  // Verifica el objeto recibido
  this.tratamientoSeleccionado = tratamiento;
}


abrirModal() {
  if (this.modalVerTarea) {
    this.modalVerTarea.abrirModal();
  } else {
    console.error('modalVerTarea no está inicializado aún');
  }
}


guardarDatos(){
 console.log("Hola")
console.log(this.tratamientoSeleccionado);
}
}




