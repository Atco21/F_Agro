import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ OrdenesService } from '../../../../services/ordenes.service';

@Component({
  selector: 'app-orden-pausadas',
  imports: [CommonModule],
  templateUrl: './orden-pausadas.component.html',
  styleUrl: './orden-pausadas.component.css'
})
export class OrdenPausadasComponent {

    ordenesPausadas: any;

    parcela:any;
    tarea:any;
    fecha_inicio:any;

    constructor(private ordenesService: OrdenesService) {
        this.ordenesService.getOrdenesPausa()
          .subscribe(result => this.ordenesPausadas = result)
    }


}
