import { Component, ViewChild, AfterViewInit} from '@angular/core';
import { ModalCrearTratamientoComponent } from '../modal-crear-tratamiento/modal-crear-tratamiento.component';
import { ModalCrearTareaComponent } from '../modal-crear-tarea/modal-crear-tarea.component';
import { ModalCrearFechaComponent } from '../modal-crear-fecha/modal-crear-fecha.component';
import { CommonModule } from '@angular/common';
import { ModalCrearParcelaComponent } from "../modal-crear-parcela/modal-crear-parcela.component";
import { Parcelas } from '../../../../models/parcelas';
import { ModalCrearAplicadorComponent } from "../modal-crear-aplicador/modal-crear-aplicador.component";
import { Aplicador } from '../../../../models/aplicador';

@Component({
  selector: 'app-crear-orden',
  standalone: true,
  imports: [CommonModule, ModalCrearTratamientoComponent, ModalCrearTareaComponent, ModalCrearFechaComponent, ModalCrearParcelaComponent, ModalCrearAplicadorComponent], //Importamos el modal
  templateUrl: './crear-orden.component.html',
  styleUrls: ['./crear-orden.component.css']
})
export class CrearOrdenComponent{

  parcelaSeleccionada: any = null;
  tareaSeleccionada: any = null;
  aplicadoresSeleccionados: any[] = [];

  tratamientoSeleccionado: any = null;

  fechaSeleccionada:string="";
  horaSeleccionada:string="";

//Se usa ViewChild para referenciar el componente hijo y manipularlo desde el padre
//@ViewChild() es un decorador de Angular que permite al componente padre obtener una referencia a un elemento hijo dentro de su plantilla (.html). Puede ser usado para acceder a:
//Un elemento HTML directamente,Un componente hijo (como en este caso),Una directiva.
  // @ViewChild(ModalCrearTratamientoComponent) modalVerTarea!: ModalCrearTratamientoComponent;//  esto ! Angular se encargará de inicializar la variable más tarde, es decir, sabemos que la referencia existirá en tiempo de ejecución
  @ViewChild('modalVerParcelas') modalVerParcelas!: ModalCrearParcelaComponent;
  @ViewChild('modalVerAplicador') modalVerAplicador!: ModalCrearAplicadorComponent;

  @ViewChild('modalVerTratamiento') modalVerTratamiento!: ModalCrearTratamientoComponent;
  @ViewChild('modalVerTarea') modalVerTarea!: ModalCrearTareaComponent;
  @ViewChild('modalVerFecha') modalVerFecha!: ModalCrearFechaComponent;

  // ngAfterViewInit() Se ejecuta cuando la vista ha cargado. Verifica que modalVerTarea se haya inicializado correctamente.




recibirParcela(parcela: Parcelas) {
  console.log('Recibido en el padre:', parcela);  // Verifica el objeto recibido
  this.parcelaSeleccionada = parcela.nombre;

  console.log(this.parcelaSeleccionada)
}


recibirAplicador(aplicador: Aplicador | Aplicador[]) {

  console.log('Recibido en el padre:', aplicador);  // Verifica el objeto recibido
  this.aplicadoresSeleccionados = Array.isArray(aplicador) ? aplicador : [aplicador];


  console.log(this.aplicadoresSeleccionados)
}


//recibe el tratamiento del hijo y lo almacena
recibirTratamiento(tratamiento: any) {
  console.log('Recibido en el padre:', tratamiento);  // Verifica el objeto recibido
  this.tratamientoSeleccionado = tratamiento;
}
recibirTarea(tarea: string) {
  console.log('Recibido en el padre:', tarea);  // Verifica el objeto recibido
  this.tareaSeleccionada = tarea;
}

recibirFechaYHora(data: { fecha: string, hora: string }) {
  this.fechaSeleccionada = data.fecha;
  this.horaSeleccionada = data.hora;
  console.log('Fecha seleccionada:', this.fechaSeleccionada);
  console.log('Hora seleccionada:', this.horaSeleccionada);
}


abrirModalAplicador() {

  if (this.modalVerAplicador) {
    this.modalVerAplicador.abrirModal();
  } else {
    console.error('modalVerAplicador no está inicializado aún');
  }

}

abrirModalParcela() {
  if (this.modalVerParcelas) {
    this.modalVerParcelas.abrirModal();
  } else {
    console.error('modalVerParcelas no está inicializado aún');
  }
}

abrirModalTratamiento() {
  if (this.modalVerTratamiento) {
    this.modalVerTratamiento.abrirModal();
  } else {
    console.error('modalVerTratamiento no está inicializado aún');
  }
}

abrirModalTarea(){
  if (this.modalVerTarea) {
    this.modalVerTarea.abrirModal();
  } else {
    console.error('modalVerTarea no está inicializado aún');
  }
}

abrirModalFecha(){
  if (this.modalVerFecha) {
    this.modalVerFecha.abrirModal();
  } else {
    console.error('modalVerTarea no está inicializado aún');
  }
}


guardarDatos(){
 console.log("Hola")
console.log(this.tratamientoSeleccionado);
}

guardarDatosTarea(){
  console.log(this.tratamientoSeleccionado);
}
}
