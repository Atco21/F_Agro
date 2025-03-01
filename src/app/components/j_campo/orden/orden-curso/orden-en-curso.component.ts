import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ OrdenesService } from '../../services/ordenes.service';
@Component({
  selector: 'app-orden-en-curso',
  imports: [CommonModule],
  templateUrl: './orden-en-curso.component.html',
  styleUrl: './orden-en-curso.component.css'
})
export class OrdenEnCursoComponent {
  ordenesCurso: any;

  parcela:any;
  tarea:any;
  fecha_inicio:any;

  constructor(private ordenesService: OrdenesService) {
      this.ordenesService.getOrdenesCurso()
        .subscribe(result => this.ordenesCurso = result)
  }
}
