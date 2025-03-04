import { Component, ViewChild, ElementRef, Renderer2, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaquinaService } from '../../../../services/maquina.service';
import { Maquina } from '../../../../models/Maquina';

@Component({
  selector: 'app-modal-crear-maquina',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './modal-crear-maquina.component.html',
  styleUrl: './modal-crear-maquina.component.css'
})
export class ModalCrearMaquinaComponent implements OnInit {

  isVisible = false;
  maquinas: Maquina[] = [];
  maquinaSeleccionada: any = null;

  @ViewChild('modalElement') modalElement!: ElementRef;
  @Output() maquinaGuardada = new EventEmitter<Maquina>();

  constructor(private rendered: Renderer2, private maquinaService: MaquinaService){}


  ngOnInit(): void {
    this.maquinaService.getMaquinas().subscribe(
      (data) => {
        this.maquinas = data;
      },
      (error) => {
        console.error('Error al obtener maquinas', error);
      }
    );
  }



  seleccionarMaquina(maquina: any) {
    // Si la máquina ya está seleccionada, la deseleccionamos
    if (this.maquinaSeleccionada === maquina) {
      this.maquinaSeleccionada = null;
    } else {
      // Si no, seleccionamos la nueva y desmarcamos la anterior
      this.maquinaSeleccionada = maquina;
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
    console.log('Emitiendo:', this.maquinaSeleccionada);
    this.maquinaGuardada.emit(this.maquinaSeleccionada);
    this.cerrarModal();
  }
}
