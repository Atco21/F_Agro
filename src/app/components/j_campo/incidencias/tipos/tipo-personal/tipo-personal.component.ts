import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IncidenciasService } from '../../../../../services/incidencias.service';

@Component({
  selector: 'app-tipo-personal',
  imports: [CommonModule],
  templateUrl: './tipo-personal.component.html',
  styleUrl: './tipo-personal.component.css'
})
export class TipoPersonalComponent {
  incidenciasPersonal: any;

    parcela:any;
    tarea:any;
    fecha_inicio:any;

    constructor(private IncidenciasService: IncidenciasService) {
        this.IncidenciasService.getIncidenciasPersonal()
          .subscribe(result => this.incidenciasPersonal = result)
    }
}
