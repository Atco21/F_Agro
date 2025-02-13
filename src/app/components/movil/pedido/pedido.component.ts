import { Component } from '@angular/core';
import { QuimicosService } from '../../../servicios/quimicos.service';

@Component({
  selector: 'app-pedido',
  imports: [],
  templateUrl: './pedido.component.html',
  styleUrl: './pedido.component.css'
})
export class PedidoComponent {

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
  guardarCantidad(){
    console.log("1");
  }

}
