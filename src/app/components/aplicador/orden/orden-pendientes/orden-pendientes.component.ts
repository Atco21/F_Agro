import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdenesService } from '../../../../_services/ordenes.service';


@Component({
  selector: 'app-orden-pendientes',
  imports: [CommonModule],
  templateUrl: './orden-pendientes.component.html',
  styleUrl: './orden-pendientes.component.css'
})
export class OrdenPendientesComponent {
  ordenesPendientes: any;

  parcela:any;
  tarea:any;
  fecha_inicio:any;

  constructor(private ordenesService: OrdenesService) {
      this.ordenesService.getOrdenesPendientes()
        .subscribe(result => this.ordenesPendientes = result);
  }

}