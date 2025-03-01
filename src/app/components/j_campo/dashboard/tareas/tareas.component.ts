import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ OrdenesService } from '../../../../services/ordenes.service';
@Component({
  selector: 'app-tareas',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent {

    ordenesCurso: any;

    parcela:any;
    tarea:any;
    fecha_inicio:any;

    constructor(private ordenesService: OrdenesService) {
        this.ordenesService.getOrdenesCurso()
          .subscribe(result => this.ordenesCurso = result)
    }
}
