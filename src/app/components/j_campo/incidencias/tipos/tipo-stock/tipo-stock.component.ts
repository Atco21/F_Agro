import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IncidenciasService } from '../../../../../services/incidencias.service';

@Component({
  selector: 'app-tipo-personal',
  imports: [CommonModule],
  templateUrl: './tipo-stock.component.html',
  styleUrl: './tipo-stock.component.css'
})
export class TipoStockComponent {
  incidenciasStock: any;

    parcela:any;
    tarea:any;
    fecha_inicio:any;

    constructor(private IncidenciasService: IncidenciasService) {
        this.IncidenciasService.getIncidenciasStock()
          .subscribe(result => this.incidenciasStock = result)
    }
}
