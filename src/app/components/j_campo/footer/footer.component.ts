import { Component,ViewChild,ElementRef, Renderer2} from '@angular/core';
import { RouterLink } from '@angular/router';
import { ModalIncidenciaComponent } from '../incidencias/modal-incidencia/modal-incidencia.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  imports: [RouterLink, CommonModule, ModalIncidenciaComponent]

})
export class FooterComponent {
  isIncidenciaMenuVisible: boolean = false;
  isOrdenMenuVisible: boolean = false;
  isCuentaMenuVisible: boolean = false;



   // Función para alternar la visibilidad
   IncidenciaMenu() {
    this.isOrdenMenuVisible = false;
    this.isIncidenciaMenuVisible = !this.isIncidenciaMenuVisible;
  }

  closeIncidenciaMenu() {
    this.isIncidenciaMenuVisible = false;
  }

  OrdenMenu(){
    this.isIncidenciaMenuVisible = false;
    this.isOrdenMenuVisible = !this.isIncidenciaMenuVisible;
  }
  closeOrdenMenu(){
    this.isOrdenMenuVisible = false;
  }

  Menu(){
    this.isCuentaMenuVisible  = false;
    this.isCuentaMenuVisible = !this.isCuentaMenuVisible;
  }
  closeCuentaMenu() {
    this.isCuentaMenuVisible = false;
  }



  constructor(private router: Router) {}

  ngOnInit() {// Cuando le hagamos click a routerLink , cerramos los menús automáticamente
    this.router.events.subscribe(() => {
      this.cerraModalMenus();
    });
  }


  // Cierra ambos menús
  cerraModalMenus() {
    this.isIncidenciaMenuVisible = false;
    this.isOrdenMenuVisible = false;
  }




}
