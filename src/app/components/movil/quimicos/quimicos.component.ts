import { Component, AfterContentInit } from '@angular/core';
import { QuimicosService } from '../../../servicios/quimicos.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-quimicos',
  imports: [],
  templateUrl: './quimicos.component.html',
  styleUrl: './quimicos.component.css'
})
export class QuimicosComponent {

  quimicos: any;  // Array para almacenar la lista de químicos

  constructor(private quimicosService: QuimicosService) {
    this.quimicosService.obtenerQuimicos()
      .subscribe(result => this.quimicos = result)
  }




}
