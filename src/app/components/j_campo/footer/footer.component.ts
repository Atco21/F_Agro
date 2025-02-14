import { Component,ViewChild,ElementRef, Renderer2} from '@angular/core';
import { RouterLink } from '@angular/router';
import { ModalIncidenciaComponent } from '../incidencias/modal-incidencia/modal-incidencia.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  imports: [RouterLink, CommonModule, ModalIncidenciaComponent]

})
export class FooterComponent {
  isIncidenciaMenuVisible: boolean = false;

  // Función para alternar la visibilidad
  IncidenciaMenu() {
    this.isIncidenciaMenuVisible = !this.isIncidenciaMenuVisible;
  }

  closeIncidenciaMenu() {
    this.isIncidenciaMenuVisible = false;
  }


}
