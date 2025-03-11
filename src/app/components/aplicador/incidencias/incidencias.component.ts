import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IncidenciasService } from '../../../_services/incidencias.service';

@Component({
  selector: 'app-incidencias',
  imports: [],
  templateUrl: './incidencias.component.html',
  styleUrl: './incidencias.component.css'
})
export class IncidenciasComponent {
  incidencias:any=null;
  incidenciaSeleccionada:any=null;
  

    constructor(private IncidenciasService: IncidenciasService) {
      this.IncidenciasService.getIncidencias()
        .subscribe(result => this.incidencias = result);
    }


    seleccionarIncidencia(incidencia: any) {
      console.log(incidencia);
      this.incidenciaSeleccionada = incidencia;
    }
}
