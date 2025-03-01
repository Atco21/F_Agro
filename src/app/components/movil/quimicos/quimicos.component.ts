import { Component } from '@angular/core';
import { QuimicosService } from '../../../_services/quimicos.service';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-quimicos',
  templateUrl: './quimicos.component.html',
  styleUrls: ['./quimicos.component.css'],
  imports: [RouterLink]
})
export class QuimicosComponent {
  quimicos: any;  // Lista de químicos
  cantidades: { [id: number]: number } = {}; // Objeto para manejar cantidades por producto

  constructor(private quimicosService: QuimicosService) {
    this.quimicosService.obtenerQuimicos()
      .subscribe(result => {
        this.quimicos = result;
        this.quimicos.forEach((q: any) => this.cantidades[q.id] = 0);
      });
  }

  incrementar(id: number) {
    this.cantidades[id]++;
  }

  decrementar(id: number) {
    if (this.cantidades[id] > 0) {
      this.cantidades[id]--;
    }
  }
}
