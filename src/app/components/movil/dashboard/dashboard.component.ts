import { Component, ViewChild } from '@angular/core';
import { ModalVerTareaComponent } from '../../modals/modal-ver-tarea/modal-ver-tarea.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  imports: [ModalVerTareaComponent]
})
export class DashboardComponent {
@ViewChild(ModalVerTareaComponent) verTarea!: ModalVerTareaComponent; // Accedemos al modal
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
}
