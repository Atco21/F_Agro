import { Component, ViewChild, ElementRef, Renderer2, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TrabajadoresService } from '../../../../services/trabajadores.service';

@Component({
  selector: 'app-modal-crear-aplicador',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './modal-crear-maquina.component.html',
  styleUrl: './modal-crear-maquina.component.css'
})
export class ModalCrearAplicadorComponent {

  isVisible = false;
  aplicadores: any = [];
  aplicadoresSeleccionados: any = [];

  @ViewChild('modalElement') modalElement!: ElementRef;
  @Output() aplicadoresGuardados = new EventEmitter<any>();

  constructor(private rendered: Renderer2, private trabajadoresService: TrabajadoresService) {
  this.trabajadoresService.obtenerAplicadores()
      .subscribe(result => this.aplicadores = result);

    console.log(this.aplicadores);
  }

  revisarAplicadores(aplicador: any) {
    const index = this.aplicadoresSeleccionados.indexOf(aplicador);
    if (index === -1) {
      this.aplicadoresSeleccionados.push(aplicador); // Lo agrega si no está
    } else {
      this.aplicadoresSeleccionados.splice(index, 1); // Lo quita si ya está
    }
  }


  abrirModal() {
    this.isVisible = true;
    this.rendered.addClass(this.modalElement.nativeElement, 'show');
    this.rendered.setAttribute(this.modalElement.nativeElement, 'aria-hidden', 'false');
    this.rendered.setStyle(this.modalElement.nativeElement, 'display', 'block');
  }

  cerrarModal() {
    this.isVisible = false;
    this.rendered.removeClass(this.modalElement.nativeElement, 'show');
    this.rendered.setAttribute(this.modalElement.nativeElement, 'aria-hidden', 'true');
    this.rendered.setStyle(this.modalElement.nativeElement, 'display', 'none');
  }

  guardarCambios() {
    console.log('Emitiendo:', this.aplicadoresSeleccionados);
    this.aplicadoresGuardados.emit(this.aplicadoresSeleccionados);
    this.cerrarModal();
  }
}
