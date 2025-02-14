import { Component, ViewChild, AfterViewInit} from '@angular/core';
import { ModalCrearTratamientoComponent } from '../modal-crear-tratamiento/modal-crear-tratamiento.component';
import { ModalCrearTareaComponent } from '../modal-crear-tarea/modal-crear-tarea.component';
import { ModalCrearFechaComponent } from '../modal-crear-fecha/modal-crear-fecha.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crear-orden',
  standalone: true,
  imports: [CommonModule, ModalCrearTratamientoComponent,ModalCrearTareaComponent,ModalCrearFechaComponent], //Importamos el modal
  templateUrl: './crear-orden.component.html',
  styleUrls: ['./crear-orden.component.css']
})
export class CrearOrdenComponent{
  tratamientoSeleccionado: any = null;
  tareaSeleccionada: any = null;
  fechaSeleccionada:string="";
  horaSeleccionada:string="";

  //Untilizamos el @ViewChild para obtener acceso al coponente del modal con el <app-modal-crear-.... #>que esta en el archivo html
  @ViewChild('modalVerTratamiento') modalVerTratamiento!: ModalCrearTratamientoComponent;
  //                Id                  Variabel    N undefined            componente
  @ViewChild('modalVerTarea') modalVerTarea!: ModalCrearTareaComponent;
  @ViewChild('modalVerFecha') modalVerFecha!: ModalCrearFechaComponent;




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
