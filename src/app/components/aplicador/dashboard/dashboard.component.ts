import { Component, ViewChild } from '@angular/core';
import { ModalVerTareaComponent } from '../modals/modal-ver-tarea/modal-ver-tarea.component';
import { OrdenesService } from '../../../_services/ordenes.service';
//import { ModalVerTareaComponent_1 as ModalVerTareaComponent } from "../modals/modal-ver-tarea/modal-ver-tarea.component";



@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  imports: [ModalVerTareaComponent,],
})
export class DashboardComponent {
  @ViewChild(ModalVerTareaComponent) verTarea!: ModalVerTareaComponent; // Accedemos al modal

  ordenesPentientes: any = null;
  ordenSeleccionada: any = null;




  constructor(private ordenesService: OrdenesService) {
    this.ordenesService.getOrdenesPendientes()
      .subscribe(result => this.ordenesPentientes = result);
  }




  crearIncidencia(): void {

    // var idTarea = document.getElementById("modalVerTarea");
    // console.log("idTarea", idTarea);
    // var verTarea;
    if (this.verTarea) {
      this.verTarea.toggleModal(); // Alternamos el estado del modal
      console.log("verTarea", this.verTarea);
    }



    //     if(idTarea&&verTarea){
    //       if(verTarea.style.display === "block"){
    //         idTarea.style.display = "none";
    //   }else{
    //     verTarea.style.display = "block"; // Muestra el modal
    //       verTarea.setAttribute("aria-hidden", "false");
    //       verTarea.classList.add("show"); // Agrega la clase para que se muestre
    //   }
    // }


  }



  empezarOrden() {
    if (this.ordenSeleccionada.estado === 'pendiente') {
      this.ordenSeleccionada.estado = 'empezada';
      console.log('Orden cambiada a empezada:', this.ordenSeleccionada);
      // Aquí podrías hacer una petición HTTP para actualizar el estado en la base de datos
    } else {
      console.log('La orden ya ha sido iniciada.');
    }
  }

  terminarOrden() {
    if (this.ordenSeleccionada.estado === 'empezada') {
      this.ordenSeleccionada.estado = 'finalizada';
      console.log('Orden cambiada a finalizada:', this.ordenSeleccionada);
      // Aquí podrías hacer una petición HTTP para actualizar el estado en la base de datos
    } else {
      console.log('La orden ya ha sido iniciada.');
    }
  }


  reportarIncidencia() {
    console.log('Redirigiendo a Reportar Incidencia...');
    // Aquí podrías redirigir a la página de incidencias o abrir otro modal
  }



  seleccionarOrden(orden: any) {
    console.log(orden);
    this.ordenSeleccionada = orden;
  }


}
