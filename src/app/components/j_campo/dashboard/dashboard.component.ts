import { Component,ViewChild,ElementRef } from '@angular/core';
import { TareasComponent } from "./tareas/tareas.component";
import { Modal } from 'bootstrap';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  imports: [TareasComponent]
})
export class DashboardComponent {

 @ViewChild('incidenciaModal') incidenciaModal: ElementRef | undefined;


  abrirModalIncidencia(): void {
    if (this.incidenciaModal) {
      const modal = new Modal(this.incidenciaModal.nativeElement);
      modal.show();  // Mostrar el modal
    }
  }

}
