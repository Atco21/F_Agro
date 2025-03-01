import { Component, ViewChild, ElementRef, Renderer2, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ParcelaService } from '../../../../services/parcela.service';
import { Parcelas } from '../../../../models/parcelas';

@Component({
  selector: 'app-modal-crear-parcela',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modal-crear-parcela.component.html',
  styleUrls: ['./modal-crear-parcela.component.css']
})
export class ModalCrearParcelaComponent {
  isVisible = false; // Controla la visibilidad del modal
  parcelas: any;
  parcelaSeleecionada: any = null;  // Inicializado a null o un objeto vacío

  @ViewChild('modalElement') modalElement!: ElementRef;
  @Output() parcelaGuardada = new EventEmitter<Parcelas>();  // Emite el tratamiento seleccionado al padre



  constructor(private rendered: Renderer2 ,private parcelaService: ParcelaService) {
    this.parcelaService.getParcelasAll()
      .subscribe(result => this.parcelas = result)

  }


  // Mostrar modal usando clases de Bootstrap
  abrirModal() {
    this.isVisible = true;
    this.rendered.addClass(this.modalElement.nativeElement, 'show');
    this.rendered.setAttribute(this.modalElement.nativeElement, 'aria-hidden', 'false');
    this.rendered.setStyle(this.modalElement.nativeElement, 'display', 'block');
  }

  // Cerrar modal solo con el botón "X"
  cerrarModal() {
    this.isVisible = false;
    this.rendered.removeClass(this.modalElement.nativeElement, 'show');
    this.rendered.setAttribute(this.modalElement.nativeElement, 'aria-hidden', 'true');
    this.rendered.setStyle(this.modalElement.nativeElement, 'display', 'none');
  }

  // Guardar cambios y emitir el tratamiento seleccionado
  guardarCambios() {
    console.log('Emitiendo:', this.parcelaSeleecionada);  // Verifica el objeto completo
    this.parcelaGuardada.emit(this.parcelaSeleecionada);
    this.cerrarModal();
  }
  }

