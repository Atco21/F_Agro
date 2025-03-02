import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IncidenciasService } from '../../../services/incidencias.service';

@Component({
  selector: 'app-tipo-maquina',
  imports: [CommonModule],
  templateUrl: './tipo-maquina.component.html',
  styleUrl: './tipo-maquina.component.css'
})
export class TipoMaquinaComponent {
  incidenciasMaquina: any;

    parcela:any;
    tarea:any;
    fecha_inicio:any;

    constructor(private IncidenciasService: IncidenciasService) {
        this.IncidenciasService.getIncidenciasMaquina()
          .subscribe(result => this.incidenciasMaquina = result)
    }
}
