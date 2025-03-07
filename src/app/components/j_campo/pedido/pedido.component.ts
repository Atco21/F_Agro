import { Component } from '@angular/core';
import { QuimicosService } from '../../../_services/quimicos.service';

@Component({
  selector: 'app-pedido',
  imports: [],
  templateUrl: './pedido.component.html',
  styleUrl: './pedido.component.css'
})
export class PedidoComponent {

  quimicos: any[] = [];  // Lista de químicos
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
  guardarCantidad() {
    const pedido = Object.keys(this.cantidades)
      .filter(id => this.cantidades[+id] > 0) // Filtra los productos con cantidad mayor a 0
      .map(id => ({
        id: +id,
        cantidad: this.cantidades[+id]
      }));
  
    if (pedido.length === 0) {
      alert("Debes seleccionar al menos un producto.");
      return;
    }
  
    // Guardar el pedido en localStorage antes de enviarlo
    localStorage.setItem('pedido', JSON.stringify(pedido));
  
    // Enviar el pedido al servidor
    this.quimicosService.hacerPedido(pedido).subscribe({
      next: response => {
        alert("Pedido realizado con éxito!");
        // Resetear las cantidades después de hacer el pedido
        this.quimicos.forEach(q => this.cantidades[q.id] = 0);
        // Eliminar el pedido de localStorage después de enviarlo correctamente
        localStorage.removeItem('pedido');
      },
      error: err => {
        alert("Hubo un error al realizar el pedido.");
        console.error(err);
        // Si hubo un error, puedes optar por guardar el pedido nuevamente en localStorage
      }
    });
  }
  

}
