import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-crear-parcela',
  templateUrl: './modal-crear-parcela.component.html',
  styleUrls: ['./modal-crear-parcela.component.css']
})
export class ModalCrearParcelaComponent implements OnInit {
  parcelas: { id: number, nombre: string }[] = [];
  selectedParcela: number | null = null;

  ngOnInit(): void {
    // Aquí puedes cargar las parcelas desde la base de datos
    this.parcelas = [
      { id: 1, nombre: 'Parcela 1' },
      { id: 2, nombre: 'Parcela 2' },
      { id: 3, nombre: 'Parcela 3' }
    ];
  }
  openthirdModal(): void {
    const modalCrearParcela = document.getElementById('modalCrearParcela');
    const modalTercero = document.getElementById('modalTercero');

    if (modalCrearParcela && modalTercero) {
      // Ocultar el segundo modal
      modalCrearParcela.classList.remove('show');
      modalCrearParcela.setAttribute('aria-hidden', 'true');
      modalCrearParcela.setAttribute('style', 'display: none;');

      // Mostrar el tercer modal
      // modalTercero.classList.add('show');
      // modalTercero.setAttribute('aria-hidden', 'false');
      // modalTercero.setAttribute('style', 'display: block; padding-right: 17px;');
    }

  }

  cerrarModal(): void {
    const modalCrearParcela = document.getElementById('modalCrearParcela');

    if (modalCrearParcela) {
      // Ocultar el modal
      modalCrearParcela.classList.remove('show');
      modalCrearParcela.setAttribute('aria-hidden', 'true');
      modalCrearParcela.setAttribute('style', 'display: none;');
    }
  }
}
